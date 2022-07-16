resource "aws_s3_bucket" "terraform_state" {
  bucket        = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-terraform-backend${var.environment_name != "" ? "-${var.environment_name}" : ""}"
  force_destroy = true
  versioning {
    enabled = true
  }
  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}

resource "aws_dynamodb_table" "terraform_locks" {
  name         = "${var.team_name}${var.team_name != "" ? "-" : ""}${var.product_name}-terraform-state-locking${var.environment_name != "" ? "-${var.environment_name}" : ""}"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"
  attribute {
    name = "LockID"
    type = "S"
  }
}
