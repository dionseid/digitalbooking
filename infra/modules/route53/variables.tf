variable "environment_name" {
  description = "deployment environment (dev/stage/prod)"
  type        = string
  default     = ""
}

variable "eb_endpoint" {
  type = string
}
