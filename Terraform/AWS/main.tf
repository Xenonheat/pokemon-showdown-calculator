module "dynamo-user-sessions-table" {
  source                                = "./DynamoDB/modules/table/modules/default-table"

  SERVICE                               = "${var.SERVICE}"
  ENVIRONMENT                           = "${var.ENVIRONMENT}"
  DYNAMODB_NAME                         = "user-sessions"
  DYNAMODB_BILLING_MODE                 = "PROVISIONED"
  DYNAMODB_READ_CAPACITY                = 2
  DYNAMODB_WRITE_CAPACITY               = 2
  DYNAMODB_PARTITION_KEY                = "SessionGuid"
  DYNAMODB_PARTITION_NAME               = "SessionGuid"
  DYNAMODB_PARTITION_TYPE               = "S"
  DYNAMODB_ENABLE_ENCRYPTION            = true
  DYNAMODB_TIMETOLIVE_NAME              = "TimeToLive"
  DYNAMODB_ENABLE_TIMETOLIVE            = true
  DYNAMODB_ENABLE_POINTINTIME           = false
  DYNAMODB_ENABLE_STREAM                = false
}

module "dynamo-users-table" {
  source                                = "./DynamoDB/modules/table/modules/default-table"

  SERVICE                               = "${var.SERVICE}"
  ENVIRONMENT                           = "${var.ENVIRONMENT}"
  DYNAMODB_NAME                         = "users"
  DYNAMODB_BILLING_MODE                 = "PROVISIONED"
  DYNAMODB_READ_CAPACITY                = 1
  DYNAMODB_WRITE_CAPACITY               = 1
  DYNAMODB_PARTITION_KEY                = "EmailAddress"
  DYNAMODB_PARTITION_NAME               = "EmailAddress"
  DYNAMODB_PARTITION_TYPE               = "S"
  DYNAMODB_ENABLE_ENCRYPTION            = true
  DYNAMODB_TIMETOLIVE_NAME              = "TimeToLive"
  DYNAMODB_ENABLE_TIMETOLIVE            = true
  DYNAMODB_ENABLE_POINTINTIME           = false
  DYNAMODB_ENABLE_STREAM                = false
}

module "dynamo-pokemon-teams" {
  source                                = "./DynamoDB/modules/table/modules/default-table"

  SERVICE                               = "${var.SERVICE}"
  ENVIRONMENT                           = "${var.ENVIRONMENT}"
  DYNAMODB_NAME                         = "pokemon-teams"
  DYNAMODB_BILLING_MODE                 = "PROVISIONED"
  DYNAMODB_READ_CAPACITY                = 1
  DYNAMODB_WRITE_CAPACITY               = 1
  DYNAMODB_PARTITION_KEY                = "TeamGuid"
  DYNAMODB_PARTITION_NAME               = "TeamGuid"
  DYNAMODB_PARTITION_TYPE               = "S"
  DYNAMODB_ENABLE_ENCRYPTION            = true
  DYNAMODB_TIMETOLIVE_NAME              = "TimeToLive"
  DYNAMODB_ENABLE_TIMETOLIVE            = true
  DYNAMODB_ENABLE_POINTINTIME           = false
  DYNAMODB_ENABLE_STREAM                = false
}

module "dynamo-pokemon" {
  source                                = "./DynamoDB/modules/table/modules/default-table"

  SERVICE                               = "${var.SERVICE}"
  ENVIRONMENT                           = "${var.ENVIRONMENT}"
  DYNAMODB_NAME                         = "pokemon"
  DYNAMODB_BILLING_MODE                 = "PROVISIONED"
  DYNAMODB_READ_CAPACITY                = 1
  DYNAMODB_WRITE_CAPACITY               = 1
  DYNAMODB_PARTITION_KEY                = "PokemonGuid"
  DYNAMODB_PARTITION_NAME               = "PokemonGuid"
  DYNAMODB_PARTITION_TYPE               = "S"
  DYNAMODB_ENABLE_ENCRYPTION            = true
  DYNAMODB_TIMETOLIVE_NAME              = "TimeToLive"
  DYNAMODB_ENABLE_TIMETOLIVE            = true
  DYNAMODB_ENABLE_POINTINTIME           = false
  DYNAMODB_ENABLE_STREAM                = false
}

module "dynamo-pokemon-types" {
  source                                = "./DynamoDB/modules/table/modules/default-table"

  SERVICE                               = "${var.SERVICE}"
  ENVIRONMENT                           = "${var.ENVIRONMENT}"
  DYNAMODB_NAME                         = "pokemon-types"
  DYNAMODB_BILLING_MODE                 = "PROVISIONED"
  DYNAMODB_READ_CAPACITY                = 1
  DYNAMODB_WRITE_CAPACITY               = 1
  DYNAMODB_PARTITION_KEY                = "TypeGuid"
  DYNAMODB_PARTITION_NAME               = "TypeGuid"
  DYNAMODB_PARTITION_TYPE               = "S"
  DYNAMODB_ENABLE_ENCRYPTION            = true
  DYNAMODB_TIMETOLIVE_NAME              = "TimeToLive"
  DYNAMODB_ENABLE_TIMETOLIVE            = true
  DYNAMODB_ENABLE_POINTINTIME           = false
  DYNAMODB_ENABLE_STREAM                = false
}

module "dynamo-pokemon-moves" {
  source                                = "./DynamoDB/modules/table/modules/default-table"

  SERVICE                               = "${var.SERVICE}"
  ENVIRONMENT                           = "${var.ENVIRONMENT}"
  DYNAMODB_NAME                         = "pokemon-types"
  DYNAMODB_BILLING_MODE                 = "PROVISIONED"
  DYNAMODB_READ_CAPACITY                = 1
  DYNAMODB_WRITE_CAPACITY               = 1
  DYNAMODB_PARTITION_KEY                = "MoveGuid"
  DYNAMODB_PARTITION_NAME               = "MoveGuid"
  DYNAMODB_PARTITION_TYPE               = "S"
  DYNAMODB_ENABLE_ENCRYPTION            = true
  DYNAMODB_TIMETOLIVE_NAME              = "TimeToLive"
  DYNAMODB_ENABLE_TIMETOLIVE            = true
  DYNAMODB_ENABLE_POINTINTIME           = false
  DYNAMODB_ENABLE_STREAM                = false
}
