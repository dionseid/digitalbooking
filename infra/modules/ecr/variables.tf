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

variable "account_id" {
  type = string
}
