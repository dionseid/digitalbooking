# Create Elastic Beanstalk application

resource "aws_elastic_beanstalk_application" "elastic_app" {
  name = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}${var.environment_name != "" ? "-${var.environment_name}" : ""}"
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
    name   = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-eb-application-permissions${var.environment_name != "" ? "-${var.environment_name}" : ""}"
    policy = data.aws_iam_policy_document.permissions.json
  }
}

resource "aws_iam_instance_profile" "eb_instance_profile" {
  name = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-instance-profile${var.environment_name != "" ? "-${var.environment_name}" : ""}"
  role = aws_iam_role.ec2_role.name
}

# Create Elastic Beanstalk environment

resource "aws_elastic_beanstalk_environment" "beanstalk_app_env" {
  name                = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-env${var.environment_name != "" ? "-${var.environment_name}" : ""}"
  application         = aws_elastic_beanstalk_application.elastic_app.name
  solution_stack_name = "64bit Amazon Linux 2 v3.4.16 running Docker" #"64bit Amazon Linux 2 v2.14.3 running Docker"

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
    value     = var.vpc_id
  }

  setting {
    namespace = "aws:ec2:vpc"
    name      = "Subnets"
    value     = join(",", var.private_subnets)
  }

  /* --------------------------------- LB --------------------------------- */

  setting {
    namespace = "aws:ec2:vpc"
    name      = "ELBSubnets"
    value     = join(",", var.public_subnets)
  }

  # listener --»

  setting {
    name      = "Rules"
    namespace = "aws:elbv2:listener:default"
    resource  = ""
    value     = "politicas,imagenes,caracteristicas,categorias,productos,ciudades"
  }

  # processes --»

  setting {
    name      = "Protocol"
    namespace = "aws:elasticbeanstalk:environment:process:default8080"
    resource  = ""
    value     = "HTTP"
  }

  setting {
    name      = "Port"
    namespace = "aws:elasticbeanstalk:environment:process:default8080"
    resource  = ""
    value     = "8080"
  }

  setting {
    name      = "HealthCheckPath"
    namespace = "aws:elasticbeanstalk:environment:process:default8080"
    resource  = ""
    value     = "/ciudades"
  }

  # rules --»


  setting {
    name      = "Priority"
    namespace = "aws:elbv2:listenerrule:ciudades"
    resource  = ""
    value     = "1"
  }

  setting {
    name      = "Priority"
    namespace = "aws:elbv2:listenerrule:categorias"
    resource  = ""
    value     = "2"
  }

  setting {
    name      = "Priority"
    namespace = "aws:elbv2:listenerrule:productos"
    resource  = ""
    value     = "3"
  }

  setting {
    name      = "Priority"
    namespace = "aws:elbv2:listenerrule:imagenes"
    resource  = ""
    value     = "4"
  }

  setting {
    name      = "Priority"
    namespace = "aws:elbv2:listenerrule:caracteristicas"
    resource  = ""
    value     = "5"
  }


  setting {
    name      = "Priority"
    namespace = "aws:elbv2:listenerrule:politicas"
    resource  = ""
    value     = "6"
  }

  # setting {
  #   name      = "Priority"
  #   namespace = "aws:elbv2:listenerrule:politicas"
  #   resource  = ""
  #   value     = "7"
  # }

  setting {
    name      = "PathPatterns"
    namespace = "aws:elbv2:listenerrule:caracteristicas"
    resource  = ""
    value     = "/caracteristicas*"
  }

  setting {
    name      = "PathPatterns"
    namespace = "aws:elbv2:listenerrule:categorias"
    resource  = ""
    value     = "/categorias"
  }

  setting {
    name      = "PathPatterns"
    namespace = "aws:elbv2:listenerrule:ciudades"
    resource  = ""
    value     = "/ciudades"
  }

  setting {
    name      = "PathPatterns"
    namespace = "aws:elbv2:listenerrule:imagenes"
    resource  = ""
    value     = "/imagenes*"
  }

  setting {
    name      = "PathPatterns"
    namespace = "aws:elbv2:listenerrule:politicas"
    resource  = ""
    value     = "/politicas"
  }

  setting {
    name      = "PathPatterns"
    namespace = "aws:elbv2:listenerrule:productos"
    resource  = ""
    value     = "/productos/*"
  }

  setting {
    name      = "Process"
    namespace = "aws:elbv2:listenerrule:caracteristicas"
    resource  = ""
    value     = "default8080"
  }

  setting {
    name      = "Process"
    namespace = "aws:elbv2:listenerrule:categorias"
    resource  = ""
    value     = "default8080"
  }

  setting {
    name      = "Process"
    namespace = "aws:elbv2:listenerrule:ciudades"
    resource  = ""
    value     = "default8080"
  }

  setting {
    name      = "Process"
    namespace = "aws:elbv2:listenerrule:imagenes"
    resource  = ""
    value     = "default8080"
  }

  setting {
    name      = "Process"
    namespace = "aws:elbv2:listenerrule:politicas"
    resource  = ""
    value     = "default8080"
  }

  setting {
    name      = "Process"
    namespace = "aws:elbv2:listenerrule:productos"
    resource  = ""
    value     = "default8080"
  }

  /* ------------------------------ instances ----------------------------- */

  setting {
    namespace = "aws:ec2:instances"
    name      = "InstanceTypes"
    value     = join(",", var.instance_type)
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "EC2KeyName"
    value     = var.public_key_name
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

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "SecurityGroups"
    value     = var.app_sg_id
  }

  setting {
    namespace = "aws:elbv2:loadbalancer"
    name      = "SecurityGroups"
    value     = var.ingress_sg_id
  }

  setting {
    namespace = "aws:elbv2:loadbalancer"
    name      = "ManagedSecurityGroup"
    value     = var.ingress_sg_id
  }

  # DB --»

  setting {
    name      = "HasCoupledDatabase"
    namespace = "aws:rds:dbinstance"
    value     = "false"
  }
}

output "cname" {
  value = aws_elastic_beanstalk_environment.beanstalk_app_env.cname
}
