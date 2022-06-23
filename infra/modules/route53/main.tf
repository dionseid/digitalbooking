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

module "records" {
  source  = "terraform-aws-modules/route53/aws//modules/records"
  version = "~> 2.0"

  zone_name = keys(module.zones.route53_zone_zone_id)[0]

  records = [
    {
      name    = "www.remo-digitalbooking.click"
      type    = "CNAME"
      ttl     = 300
      records = [var.eb_endpoint]
    }
  ]

  depends_on = [module.zones]
}

output "name_server" {
  value = module.zones.route53_zone_name_servers
}
