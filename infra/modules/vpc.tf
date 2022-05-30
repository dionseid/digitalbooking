module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "g8-vpc"
  cidr = var.main_vpc_cidr

  azs              = var.azs
  public_subnets   = var.public_subnets
  private_subnets  = var.private_subnets
  database_subnets = var.database_subnets

  igw_tags = {
    Name = "g8-igw"
  }
  enable_nat_gateway     = true
  single_nat_gateway     = true # The NAT gateway will be placed in the first public subnet in public_subnets block
  one_nat_gateway_per_az = false
  nat_gateway_tags = {
    Name        = "g8-ngw"
    Description = "NAT gateway con EIP alocade a la subred pública"
  }
  nat_eip_tags = {
    Name        = "g8-nat-eip"
    Description = "elastic IP para le NAT del grupo 8"
  }

  public_route_table_tags = {
    Name = "g8-pub-rtb"
  }
  private_route_table_tags = {
    Name = "g8-app-rtb"
  }
  create_database_subnet_route_table = true
  database_route_table_tags = {
    Name = "g8-rds-rtb"
  }

  tags = {
    App         = var.app_name
    Environment = var.environment_name
    Terraform   = "true"
  }
}
