variable SERVICE {
  type = string
}

variable ENVIRONMENT {
  type = string
}

variable DYNAMODB_NAME {
  type = string
}

variable DYNAMODB_BILLING_MODE {
  type = string
  default = "PROVISIONED"
}

variable DYNAMODB_READ_CAPACITY {
  type = number
  default = 1
}

variable DYNAMODB_WRITE_CAPACITY {
  type = number
  default = 1
}

variable DYNAMODB_PARTITION_KEY {
  type = string
  default = "guid"
}

variable DYNAMODB_PARTITION_NAME {
  type = string
  default = "guid"
}

variable DYNAMODB_PARTITION_TYPE {
  type = string
  default = "S"
}

variable DYNAMODB_ENABLE_ENCRYPTION {
  default = true
}

variable DYNAMODB_TIMETOLIVE_NAME {
  type = string
  default = "TimeToLive"
}

variable DYNAMODB_ENABLE_TIMETOLIVE {
  default = true
}

variable DYNAMODB_ENABLE_POINTINTIME {
  default = false
}

variable DYNAMODB_ENABLE_STREAM {
  default = false
}
