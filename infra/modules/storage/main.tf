data "aws_iam_policy_document" "allow_public_access_policy" {
  statement {
    actions   = ["s3:GetObject"]
    sid       = "ReadOnlyAccess"
    effect    = "Allow"
    resources = ["arn:aws:s3:::${var.bucket_name}/*"]
    # principals {
    #   type        = "*"
    #   identifiers = ["*"]
    # }
  }
}

resource "aws_iam_policy" "allow_public_access_policy" {
  name   = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-public-bucket-policy${var.environment_name != "" ? "-${var.environment_name}" : ""}"
  policy = data.aws_iam_policy_document.allow_public_access_policy.json
}

module "s3_bucket" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "3.2.3"

  bucket        = var.bucket_name
  acl           = "public-read"
  attach_policy = true
  policy        = data.aws_iam_policy_document.allow_public_access_policy.json

  versioning = {
    enabled = false
  }
}
