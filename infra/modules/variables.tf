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
  #default     = ["10.0.0.0/24", "10.0.1.0/24"]
}

variable "private_subnets" {
  description = "subredes privadas para uso de los servidores web"
  type        = list(string)
  #default     = ["10.0.2.0/24", "10.0.3.0/24"]
}

variable "database_subnets" {
  description = "subredes para la BD, sin acceso de entrada desde internet"
  type        = list(string)
  #default     = ["10.0.4.0/24", "10.0.5.0/24"]
}

variable "subnet_suffixes" {
  description = "Suffix to add to subnet name"
  type        = list(string)
  default     = ["a", "b", "c", "d"]
}