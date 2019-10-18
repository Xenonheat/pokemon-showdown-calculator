provider "aws" {
  access_key  = "${var.ACCESS_KEY}"
  secret_key  = "${var.SECRET_KEY}"
  region      = "${var.REGION}"
}

provider "google" {}
provider "azure" {}

variable "ACCESS_KEY" {}
variable "SECRET_KEY" {}
variable "REGION" {}
