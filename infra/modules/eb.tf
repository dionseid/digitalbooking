# Create Elastic Beanstalk application

resource "aws_elastic_beanstalk_application" "elastic_app" {
  name = "g8-${var.app_name}"
}

# prerrequisite: IAM instance profile, which may be contained within a role

data "aws_iam_policy_document" "assume_policy" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["ec2.amazonaws.com"]
    }
  }
}

data "aws_iam_policy_document" "permissions" {
  statement {
    actions = [
      "cloudwatch:PutMetricData",
      "ec2:DescribeInstanceStatus",
      "ec2messages:*",
      "s3:*"
    ]
    resources = ["*"]
  }
}

resource "aws_iam_role" "ec2_role" { # Must have the right service roles and permissions to assume
  name                = "g8-elastic-beanstalk-role"
  assume_role_policy  = data.aws_iam_policy_document.assume_policy.json
  managed_policy_arns = ["arn:aws:iam::aws:policy/AWSElasticBeanstalkWebTier", "arn:aws:iam::aws:policy/AWSElasticBeanstalkMulticontainerDocker", "arn:aws:iam::aws:policy/AWSElasticBeanstalkWorkerTier", "arn:aws:iam::aws:policy/EC2InstanceProfileForImageBuilderECRContainerBuilds", "arn:aws:iam::aws:policy/service-role/AWSElasticBeanstalkRoleRDS"] # See https://www.youtube.com/watch?v=m2XqEprF0Js&t=1s
  inline_policy {
    name   = "g8-eb-application-permissions"
    policy = data.aws_iam_policy_document.permissions.json
  }
}

resource "aws_iam_instance_profile" "eb_instance_profile" {
  name = "g8-instance-profile"
  role = aws_iam_role.ec2_role.name
}

# Create Elastic Beanstalk environment

resource "aws_elastic_beanstalk_environment" "beanstalk_app_env" {
  name                = "g8-${var.environment_name}"
  application         = aws_elastic_beanstalk_application.elastic_app.name
  solution_stack_name = "64bit Amazon Linux 2 v3.4.16 running Docker"

  # EB environment --»

  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "LoadBalancerType"
    value     = "application"
  }

  # VPC --»

  setting {
    namespace = "aws:ec2:vpc"
    name      = "VPCId"
    value     = module.vpc.vpc_id
  }

  setting {
    namespace = "aws:ec2:vpc"
    name      = "Subnets"
    value     = join(",", module.vpc.private_subnets)
  }

  # instances --»

  setting {
    namespace = "aws:ec2:instances"
    name      = "InstanceTypes"
    value     = join(",", var.instance_type)
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "EC2KeyName"
    value     = aws_key_pair.key_public.key_name
  }

  # autoscaling --»

  setting {
    namespace = "aws:autoscaling:asg"
    name      = "MaxSize"
    value     = 2
  }

  # monitoring --»

  setting {
    namespace = "aws:elasticbeanstalk:healthreporting:system"
    name      = "SystemType"
    value     = "enhanced" # Enhanced health reporting requires a service role and a version 2 or newer platform version
  }

  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "MeasureName"
    value     = "CPUUtilization"
  }

  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "Unit"
    value     = "Percent"
  }

  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "LowerThreshold"
    value     = 10
  }

  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "UpperThreshold"
    value     = 60
  }

  # IAM --»

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = aws_iam_instance_profile.eb_instance_profile.name
  }

  # security groups --»

  depends_on = [
    aws_security_group.g8_app_sg
  ]

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "SecurityGroups"
    value     = aws_security_group.g8_app_sg.id
  }

  setting {
    namespace = "aws:elbv2:loadbalancer"
    name      = "SecurityGroups"
    value     = aws_security_group.g8_ingress_sg.id
  }

  setting {
    namespace = "aws:elbv2:loadbalancer"
    name      = "ManagedSecurityGroup"
    value     = aws_security_group.g8_ingress_sg.id
  }

  # DB --»

  setting {
    name      = "HasCoupledDatabase"
    namespace = "aws:rds:dbinstance"
    value     = "false"
  }
}
