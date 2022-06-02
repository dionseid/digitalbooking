terraform {
  backend "s3" {
    bucket         = "g8-tf-backend"
    key            = "digital-booking/terraform.tfstate" # location inside bucket. It can have several subfolders
    region         = "us-west-1"
    dynamodb_table = "g8-terraform-state-locking"
    encrypt        = true
    profile        = "digital_booking_g8"
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  profile = var.AWS_named_profile
  region  = var.region
}

module "web_app" {
  source = "./modules"

  region           = var.region
  azs              = [data.aws_availability_zones.available.names[0], data.aws_availability_zones.available.names[1]]
  public_subnets   = slice(cidrsubnets(var.main_vpc_cidr, 8, 8, 8, 8, 8, 8), 0, 2)
  private_subnets  = slice(cidrsubnets(var.main_vpc_cidr, 8, 8, 8, 8, 8, 8), 2, 4)
  database_subnets = slice(cidrsubnets(var.main_vpc_cidr, 8, 8, 8, 8, 8, 8), 4, 6)
  app_name         = var.app_name
  instance_type    = ["t2.medium", "t2.small", "t2.micro"]
  public_key       = var.public_key
  db_pass          = var.db_pass
  db_user          = "foo"
}
