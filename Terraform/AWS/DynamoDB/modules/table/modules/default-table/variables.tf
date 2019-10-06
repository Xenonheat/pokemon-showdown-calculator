variable SERVICE {
  type        = string
  description = "Service name referencing project"
}

variable ENVIRONMENT {
  type        = string
  description = "Environment of deployed architecture (Integration, Live)"
}

variable DYNAMODB_NAME {
  type = string
  description = ""
}

variable DYNAMODB_BILLING_MODE {
  type = string
  description = ""
}

variable DYNAMODB_READ_CAPACITY {
  type = string
  description = ""
}

variable DYNAMODB_WRITE_CAPACITY {
  type = string
  description = ""
}

variable DYNAMODB_PARTITION_KEY {
  type = string
  description = ""
}

variable DYNAMODB_PARTITION_NAME {
  type = string
  description = ""
}

variable DYNAMODB_PARTITION_TYPE {
  type = string
  description = ""
}

variable DYNAMODB_ENABLE_ENCRYPTION {
  type = string
  description = ""
}

variable DYNAMODB_TIMETOLIVE_NAME {
  type = string
  description = ""
}

variable DYNAMODB_ENABLE_TIMETOLIVE {
  type = string
  description = ""
}

variable DYNAMODB_ENABLE_POINTINTIME {
  type = string
  description = ""
}

variable DYNAMODB_ENABLE_STREAM {
  type = string
  description = ""
}
