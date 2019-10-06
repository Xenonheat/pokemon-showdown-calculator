module "default_dynamo_table" {
  source                                = "./modules/route53"

  SERVICE                               = "${var.SERVICE}"
  ENVIRONMENT                           = "${var.ENVIRONMENT}"
  DYNAMODB_NAME                         = "${var.DYNAMODB_NAME}"
  DYNAMODB_BILLING_MODE                 = "${var.DYNAMODB_BILLING_MODE}"
  DYNAMODB_READ_CAPACITY                = "${var.DYNAMODB_READ_CAPACITY}"
  DYNAMODB_WRITE_CAPACITY               = "${var.DYNAMODB_WRITE_CAPACITY}"
  DYNAMODB_PARTITION_KEY                = "${var.DYNAMODB_PARTITION_KEY}"
  DYNAMODB_PARTITION_NAME               = "${var.DYNAMODB_PARTITION_NAME}"
  DYNAMODB_PARTITION_TYPE               = "${var.DYNAMODB_PARTITION_TYPE}"
  DYNAMODB_ENABLE_ENCRYPTION            = "${var.DYNAMODB_ENABLE_ENCRYPTION}"
  DYNAMODB_TIMETOLIVE_NAME              = "${var.DYNAMODB_TIMETOLIVE_NAME}"
  DYNAMODB_ENABLE_TIMETOLIVE            = "${var.DYNAMODB_ENABLE_TIMETOLIVE}"
  DYNAMODB_ENABLE_POINTINTIME           = "${var.DYNAMODB_ENABLE_POINTINTIME}"
  DYNAMODB_ENABLE_STREAM                = "${var.DYNAMODB_ENABLE_STREAM}"
}
