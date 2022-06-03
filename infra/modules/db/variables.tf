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

variable "subnet_ids" {
  description = "The subnets the DB lives in, in order to configure subnet group, as required by resource"
  type        = list(string)
}

variable "rds_sg_id" {
  type = string
}

variable "db_name" {
  type = string
}

variable "db_user" {
  type = string
}

variable "db_pass" {
  type      = string
  sensitive = true
  default   = "foobarbaz"
}
