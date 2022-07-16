resource "aws_cloud9_environment_ec2" "bastion" {
  name          = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}${var.environment_name != "" ? "-${var.environment_name}" : ""}"
  instance_type = "t2.micro"
  subnet_id     = var.subnet_id
  owner_arn     = "arn:aws:iam::${var.account_id}:user/Administrator"
}

data "aws_instance" "cloud9_instance" {
  filter {
    name   = "tag:aws:cloud9:environment"
    values = [aws_cloud9_environment_ec2.bastion.id]
  }
}

resource "aws_eip" "cloud9_eip" {
  instance = data.aws_instance.cloud9_instance.id
  vpc      = true
}

output "cloud9_public_ip" {
  value = aws_eip.cloud9_eip.public_ip
}

output "bastion_instace_sg" {
  value = data.aws_instance.cloud9_instance.vpc_security_group_ids
}
