resource "aws_db_subnet_group" "default" {
  name       = "g8-rds-subnet-group"
  subnet_ids = module.vpc.database_subnets

  tags = {
    Name = "g8-db-layer"
  }
}

resource "aws_db_instance" "default" {
  allocated_storage      = 10
  engine                 = "mysql"
  engine_version         = "5.7"
  instance_class         = "db.t3.micro"
  identifier             = "g8-db"
  name                   = var.db_name
  username               = var.db_user
  password               = var.db_pass
  parameter_group_name   = "default.mysql5.7"
  skip_final_snapshot    = true
  multi_az               = true
  db_subnet_group_name   = aws_db_subnet_group.default.name
  vpc_security_group_ids = [aws_security_group.g8_rds_sg.id]
}
