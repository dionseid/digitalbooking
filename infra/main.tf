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
      version = "> 3.0"
    }
  }
}

provider "aws" {
  #profile = "digital_booking_g8" # Uso local; no va a formar parte del pipeline
  region = var.region
}

# module "web_app" {
#   source = "./modules"

#   region           = var.region
#   azs              = [data.aws_availability_zones.available.names[0], data.aws_availability_zones.available.names[1]]
#   public_subnets   = slice(cidrsubnets(var.main_vpc_cidr, 8, 8, 8, 8, 8, 8), 0, 2)
#   private_subnets  = slice(cidrsubnets(var.main_vpc_cidr, 8, 8, 8, 8, 8, 8), 2, 4)
#   database_subnets = slice(cidrsubnets(var.main_vpc_cidr, 8, 8, 8, 8, 8, 8), 4, 6)
#   app_name         = var.app_name
#   instance_type    = ["t2.medium", "t2.small", "t2.micro"]
#   public_key       = var.public_key
#   db_name          = "g8dbdigitalbooking"
#   db_user          = "g8digitalbooking"
#   db_pass          = var.db_pass
# }

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-vpc${var.environment_name != "" ? "-${var.environment_name}" : ""}"

  cidr             = var.main_vpc_cidr
  azs              = [data.aws_availability_zones.available.names[0], data.aws_availability_zones.available.names[1]]
  public_subnets   = slice(cidrsubnets(var.main_vpc_cidr, 8, 8, 8, 8, 8, 8), 0, 2)
  private_subnets  = slice(cidrsubnets(var.main_vpc_cidr, 8, 8, 8, 8, 8, 8), 2, 4)
  database_subnets = slice(cidrsubnets(var.main_vpc_cidr, 8, 8, 8, 8, 8, 8), 4, 6)

  igw_tags = {
    Name = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-igw${var.environment_name != "" ? "-${var.environment_name}" : ""}"
  }
  enable_nat_gateway                     = true
  single_nat_gateway                     = true # The NAT gateway will be placed in the first public subnet in public_subnets block
  one_nat_gateway_per_az                 = false
  create_database_internet_gateway_route = false
  nat_gateway_tags = {
    Name        = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-ngw${var.environment_name != "" ? "-${var.environment_name}" : ""}"
    Description = "NAT gateway con EIP alocade a la subred pública"
  }
  nat_eip_tags = {
    Name = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-nat-eip${var.environment_name != "" ? "-${var.environment_name}" : ""}"
  }

  public_route_table_tags = {
    Name = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-pub-rtb${var.environment_name != "" ? "-${var.environment_name}" : ""}"
  }
  private_route_table_tags = {
    Name = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-app-rtb${var.environment_name != "" ? "-${var.environment_name}" : ""}"
  }
  create_database_subnet_route_table = true
  database_route_table_tags = {
    Name = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-rds-rtb${var.environment_name != "" ? "-${var.environment_name}" : ""}"
  }
}

module "elastic_beanstalk_app" {
  source     = "./modules/eb"
  depends_on = [module.storage]

  team_name        = var.team_name
  product_name     = var.product_name
  environment_name = var.environment_name
  instance_type    = ["t2.medium", "t2.small", "t2.micro"]
  public_subnets   = module.vpc.public_subnets
  private_subnets  = module.vpc.private_subnets
  public_key_name  = aws_key_pair.key_public.key_name
  vpc_id           = module.vpc.vpc_id
  app_sg_id        = aws_security_group.g8_app_sg.id
  ingress_sg_id    = aws_security_group.g8_ingress_sg.id
  bucket           = "elasticbeanstalk-${var.region}-${var.account_id}"
  account_id       = var.account_id
  elb_account_id   = var.elb_account_id
}

module "database" {
  source = "./modules/db"

  team_name        = var.team_name
  product_name     = var.product_name
  environment_name = var.environment_name
  subnet_ids       = module.vpc.database_subnets
  rds_sg_id        = aws_security_group.g8_rds_sg.id
  db_name          = "${var.team_name}${var.product_name}${var.environment_name}"
  db_user          = var.team_name
  db_pass          = var.db_pass
}

module "storage" {
  source = "./modules/storage"

  team_name        = var.team_name
  product_name     = var.product_name
  environment_name = var.environment_name
  bucket_name      = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-public-bucket${var.environment_name != "" ? "-${var.environment_name}" : ""}"
}

module "ecr" {
  source = "./modules/ecr"

  team_name        = var.team_name
  product_name     = var.product_name
  environment_name = var.environment_name
}

module "cloud9" {
  source = "./modules/cloud9"

  team_name        = var.team_name
  product_name     = var.product_name
  environment_name = var.environment_name
  subnet_id        = module.vpc.public_subnets[1]
}

module "route53" {
  source = "./modules/route53"

  eb_endpoint = module.elastic_beanstalk_app.cname
}
