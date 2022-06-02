variable "app_name" {
  description = "name of the web application"
  type        = string
  default     = "web-app"
}

variable "AWS_named_profile" {
  description = "named profile specified for AWS CLI config. See ~/.aws/credentials"
  type        = string
  default     = "default"
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

data "aws_availability_zones" "available" {}

variable "main_vpc_cidr" {
  description = "default is for 65536 hosts"
  type        = string
  default     = "10.0.0.0/16"
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
