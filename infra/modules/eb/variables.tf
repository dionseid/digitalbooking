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

variable "instance_type" {
  description = "EC2 instance type"
  type        = list(string)
  default     = ["t2.micro"]
}

variable "vpc_id" {
  type = string
}

variable "public_subnets" {
  description = "IDs de las subredes públicas para configurar conexión en VPC con EB y el exterior"
  type        = list(string)
}

variable "private_subnets" {
  description = "IDs de las subredes privadas para uso del ASG"
  type        = list(string)
}

variable "public_key_name" {
  description = "locally generated SSH key for the project"
  type        = string
}

variable "app_sg_id" {
  type = string
}

variable "ingress_sg_id" {
  type = string
}

variable "bucket" {
  type = string
}

variable "account_id" {
  type = string
}

variable "ssl_certificate" {
  type = string
}
