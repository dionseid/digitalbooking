resource "aws_key_pair" "key_public" {
  key_name   = "g8-key"
  public_key = var.public_key
}

/* ----------------------------- security groups ---------------------------- */

resource "aws_security_group" "g8_app_sg" {
  name        = "g8-app-sg"
  description = "Allow LB, Cloud9, and all outbound traffic"
  vpc_id      = module.vpc.vpc_id

  tags = {
    Application = var.app_name
    Environment = var.environment_name
    Owner       = "group 8"
    Role        = "private"
    Terraform   = "true"
  }
}

resource "aws_security_group_rule" "app_ssh_ingress" { # attributes as blocks --» "when creating a list-of-objects expression directly the usual handling of optional arguments does not apply"
  security_group_id        = aws_security_group.g8_app_sg.id
  type                     = "ingress"
  from_port                = 22
  to_port                  = 22
  protocol                 = "tcp"
  source_security_group_id = aws_security_group.g8_cloud9_sg.id # Con el mecanismo de membresía de grupo nos evitamos la gestión de IPs, que pueden ser cambiantes
}

resource "aws_security_group_rule" "app_http_ingress" {
  security_group_id        = aws_security_group.g8_app_sg.id
  type                     = "ingress"
  from_port                = 80
  to_port                  = 80
  protocol                 = "tcp"
  source_security_group_id = aws_security_group.g8_ingress_sg.id
}

resource "aws_security_group_rule" "app_egress_to_sg" { # Creamos este recurso separadamente para evitar el error 'Error: Cycle' entre g8_app_sg y g8_rds_sg
  security_group_id        = aws_security_group.g8_app_sg.id
  type                     = "egress"
  from_port                = 3306
  to_port                  = 3306
  protocol                 = "tcp"
  source_security_group_id = aws_security_group.g8_rds_sg.id
}

resource "aws_security_group_rule" "app_egress_to_ngw" { # "At this time you cannot use a Security Group with in-line rules in conjunction with any Security Group Rule resources"
  security_group_id = aws_security_group.g8_app_sg.id
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = [var.public_subnets[0]]
}

resource "aws_security_group" "g8_rds_sg" {
  name        = "g8-rds-sg"
  description = "private internet connection"
  vpc_id      = module.vpc.vpc_id

  tags = {
    Application = var.app_name
    Environment = var.environment_name
    Owner       = "group 8"
    Role        = "private"
    Terraform   = "true"
  }

  ingress {
    from_port       = 3306
    to_port         = 3306
    protocol        = "tcp"
    security_groups = [aws_security_group.g8_app_sg.id]
  }

  egress { # Shouldn't it have internet outlet for DB actualization? 
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = [var.public_subnets[1]]
  }
}

resource "aws_security_group" "g8_ingress_sg" { # We need a slightly different security group for the load balancer
  name   = "g8-ingress-sg"
  vpc_id = module.vpc.vpc_id

  tags = {
    Application = var.app_name
    Environment = var.environment_name
    Owner       = "group 8"
    Role        = "public"
    Terraform   = "true"
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group_rule" "lb_http_ingress" {
  security_group_id = aws_security_group.g8_ingress_sg.id
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "lb_https_ingress" {
  security_group_id = aws_security_group.g8_ingress_sg.id
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group" "g8_cloud9_sg" { # ❗ Cloud9 automáticamente ya desplegaría su propie SG
  name   = "g8-cloud9-sg"
  vpc_id = module.vpc.vpc_id

  tags = {
    Application = var.app_name
    Environment = var.environment_name
    Owner       = "group 8"
    Role        = "public"
    Terraform   = "true"
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group_rule" "cloud9_http_ingress" {
  security_group_id = aws_security_group.g8_cloud9_sg.id
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "cloud9_https_ingress" {
  security_group_id = aws_security_group.g8_cloud9_sg.id
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}
