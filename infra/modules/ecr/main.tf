module "ecr" {
  source = "terraform-aws-modules/ecr/aws"

  repository_name = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-repo${var.environment_name != "" ? "-${var.environment_name}" : ""}"

  repository_read_write_access_arns = ["arn:aws:iam::${var.account_id}:user/Administrator"]
  repository_lifecycle_policy = jsonencode({
    rules = [
      {
        rulePriority = 1,
        description  = "Keep last 30 images",
        selection = {
          tagStatus     = "tagged",
          tagPrefixList = ["remo"],
          countType     = "imageCountMoreThan",
          countNumber   = 30
        },
        action = {
          type = "expire"
        }
      }
    ]
  })

  repository_image_tag_mutability = "MUTABLE"
}
