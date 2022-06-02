variable "app_name" {
  description = "name of the web application"
  type        = string
  default     = "web-app"
}

variable "environment_name" {
  description = "deployment environment (dev/staging/production)"
  type        = string
  default     = "dev"
}

variable "region" {
  description = "provider region"
  type        = string
  default     = "us-east-1"
}

variable "azs" {
  type        = list(string)
  description = "AZs to create subnets into"
  default     = ["us-east-1a", "us-east-1b"]
}

variable "main_vpc_cidr" {
  description = "default is for 65536 hosts"
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnets" {
  description = "subredes con acceso a internet"
  type        = list(string)
  default     = ["10.0.0.0/24", "10.0.1.0/24"]
}

variable "private_subnets" {
  description = "subredes privadas para uso de los servidores web"
  type        = list(string)
  default     = ["10.0.2.0/24", "10.0.3.0/24"]
}

variable "database_subnets" {
  description = "subredes para la BD, sin acceso de entrada desde internet"
  type        = list(string)
  default     = ["10.0.4.0/24", "10.0.5.0/24"]
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = list(string)
  default     = ["t2.micro"]
}

variable "public_key" {
  description = "locally generated SSH key for the project"
  type        = string
}

variable "db_pass" {
  description = "password for DB"
  type        = string
  sensitive   = true
}

variable "db_user" {
  description = "username for DB"
  type        = string
}

variable "eb_policy" {
  description = "Attach to role to be attached to instance profile"
  type        = string
  default     = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowCloudformationReadOperationsOnElasticBeanstalkStacks",
            "Effect": "Allow",
            "Action": [
                "cloudformation:DescribeStackResource",
                "cloudformation:DescribeStackResources",
                "cloudformation:DescribeStacks"
            ],
            "Resource": [
                "arn:aws:cloudformation:*:*:stack/awseb-*",
                "arn:aws:cloudformation:*:*:stack/eb-*"
            ]
        },
        {
            "Sid": "AllowOperations",
            "Effect": "Allow",
            "Action": [
                "autoscaling:DescribeAutoScalingGroups",
                "autoscaling:DescribeAutoScalingInstances",
                "autoscaling:DescribeNotificationConfigurations",
                "autoscaling:DescribeScalingActivities",
                "autoscaling:PutNotificationConfiguration",
                "ec2:DescribeInstanceStatus",
                "ec2:AssociateAddress",
                "ec2:DescribeAddresses",
                "ec2:DescribeInstances",
                "ec2:DescribeSecurityGroups",
                "elasticloadbalancing:DescribeInstanceHealth",
                "elasticloadbalancing:DescribeLoadBalancers",
                "elasticloadbalancing:DescribeTargetHealth",
                "elasticloadbalancing:DescribeTargetGroups",
                "lambda:GetFunction",
                "sqs:GetQueueAttributes",
                "sqs:GetQueueUrl",
                "sns:Publish"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Sid": "AllowOperationsOnHealthStreamingLogs",
            "Effect": "Allow",
            "Action": [
                "logs:CreateLogStream",
                "logs:DescribeLogGroups",
                "logs:DescribeLogStreams",
                "logs:DeleteLogGroup",
                "logs:PutLogEvents"
            ],
            "Resource": "arn:aws:logs:*:*:log-group:/aws/elasticbeanstalk/*"
        }
    ]
}
EOF
}
