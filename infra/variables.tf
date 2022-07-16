variable "team_name" {
  type    = string
  default = ""
}

variable "product_name" {
  type    = string
  default = "webapp"
}

variable "environment_name" {
  description = "deployment environment (dev/stage/prod)"
  type        = string
  default     = ""
}

variable "region" {
  type    = string
  default = "us-east-1"
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

variable "account_id" {
  type = string
}
