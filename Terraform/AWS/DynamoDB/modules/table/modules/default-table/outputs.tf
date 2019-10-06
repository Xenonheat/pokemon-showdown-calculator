output "default_dynamo_arn" {
  value       = "${aws_dynamodb_table.default_table.arn}"
  description = "ARN identifier for the default table"
}

output "default_dynamo_id" {
  value       = "${aws_dynamodb_table.default_table.id}"
  description = "Identifier for the default table"
}
