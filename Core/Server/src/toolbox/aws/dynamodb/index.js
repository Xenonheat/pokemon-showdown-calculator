const { DynamoDB } = awsXRay.captureAWS(require('aws-sdk'))
const doc = new DynamoDB.DocumentClient({ service: ddb })

export const dbGet = (TableName, Key) =>
  new Promise(async (resolve, reject) => {
    console.info('DynamoDB GET: ', TableName, Key)

    const params = {
      Key,
      TableName
    }

    doc.get(params, () => {

    })
  })

export const dbQuery = (TableName, KeyConditionExpression, ExpressionAttributeNames, ExpressionAttributeValues, IndexName, Limit) =>
  new Promise(async (resolve, reject) => {
    console.info('DynamoDB QUERY', TableName, KeyConditionExpression, ExpressionAttributeNames, ExpressionAttributeValues, IndexName, Limit)
    const params = {
      ExpressionAttributeNames,
      ExpressionAttributeValues,
      KeyConditionExpression,
      Limit,
      IndexName,
      TableName
    }
    doc.query(params, () => {

    })
  })

export const dbPut = (TableName, Item) =>
  new Promise((resolve, reject) => {
    console.info('DynamoDB PUT', TableName)

    doc.put({
      Item,
      TableName
    }, () => {

    })
  })
