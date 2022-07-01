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

output "name_server" {
  value = module.zones.route53_zone_name_servers
}
