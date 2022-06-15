resource "aws_db_subnet_group" "default" {
  name       = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-rds-subnet-group${var.environment_name != "" ? "-${var.environment_name}" : ""}"
  subnet_ids = var.subnet_ids

  tags = {
    Name = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-db-layer${var.environment_name != "" ? "-${var.environment_name}" : ""}"
  }
}

resource "aws_db_instance" "default" {
  allocated_storage      = 10
  engine                 = "mysql"
  engine_version         = "5.7"
  instance_class         = "db.t3.micro"
  identifier             = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-db${var.environment_name != "" ? "-${var.environment_name}" : ""}"
  name                   = var.db_name
  username               = var.db_user
  password               = var.db_pass
  parameter_group_name   = "default.mysql5.7"
  skip_final_snapshot    = true
  multi_az               = true
  db_subnet_group_name   = aws_db_subnet_group.default.name
  vpc_security_group_ids = [var.rds_sg_id]
}
