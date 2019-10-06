/*
 XENON #################################################################################################################
       DYNAMODB DEFAULT TABLE - STANDARD TABLE
       PARAMETERS:

 XENON #################################################################################################################
*/

resource "aws_dynamodb_table" "default_table" {
  name                = "${var.SERVICE}-${var.ENVIRONMENT}-${var.DYNAMODB_NAME}"
  billing_mode        = "${var.DYNAMODB_BILLING_MODE}"
  read_capacity       = "${var.DYNAMODB_READ_CAPACITY}"
  write_capacity      = "${var.DYNAMODB_WRITE_CAPACITY}"
  hash_key            = "${var.DYNAMODB_PARTITION_KEY}"

  attribute {
    name              = "${var.DYNAMODB_PARTITION_NAME}"
    type              = "${var.DYNAMODB_PARTITION_TYPE}"
  }

  server_side_encryption {
    enabled           = "${var.DYNAMODB_ENABLE_ENCRYPTION}"
  }

  ttl {
    attribute_name    = "${var.DYNAMODB_TIMETOLIVE_NAME}"
    enabled           = "${var.DYNAMODB_ENABLE_TIMETOLIVE}"
  }

  point_in_time_recovery {
    enabled           = "${var.DYNAMODB_ENABLE_POINTINTIME}"
  }

  stream_enabled      = "${var.DYNAMODB_ENABLE_STREAM}"
}
