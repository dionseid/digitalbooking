# ref --» https://www.youtube.com/watch?v=jLvBx_V2x18&t=1006s 22'

# Manage Route 53 hosted zone --»

module "zones" {
  source  = "terraform-aws-modules/route53/aws//modules/zones"
  version = "~> 2.0"

  zones = {
    "remo-digitalbooking.click" = {
      tags = {
        env = var.environment_name
      }
    }
  }

  tags = {
    environment = var.environment_name
  }
}

# Provide Route 53 record --»

data "aws_elastic_beanstalk_hosted_zone" "current" {}

module "records" {
  source  = "terraform-aws-modules/route53/aws//modules/records"
  version = "~> 2.0"

  zone_name = keys(module.zones.route53_zone_zone_id)[0]

  records = [
    {
      name = ""
      type = "A"
      alias = {
        name    = var.eb_endpoint
        zone_id = data.aws_elastic_beanstalk_hosted_zone.current.id
      }
    },
    {
      name = "www"
      type = "A"
      alias = {
        name    = var.eb_endpoint
        zone_id = data.aws_elastic_beanstalk_hosted_zone.current.id
      }
    }
  ]

  depends_on = [module.zones]
}

# resource "aws_route53_record" "www" {
#   zone_id = module.zones.route53_zone_zone_id[0] #aws_route53_zone.primary.zone_id
#   name    = "www.remo-digitalbooking.click"
#   type    = "A"

#   alias {
#     name                   = var.eb_endpoint
#     zone_id                = module.zones.route53_zone_zone_id[0]
#     evaluate_target_health = true
#   }
# }

output "name_server" {
  value = module.zones.route53_zone_name_servers
}
