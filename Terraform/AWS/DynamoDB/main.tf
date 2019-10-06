module "table" {
  source                                = "./modules/table"
}

module "autoscaling" {
  source                                = "./modules/autoscaling"

}

module "streams" {
  source                                = "./modules/streams"

}

module "kms" {
  source                                = "./modules/kms"
}
