import awsXRay from 'aws-xray-sdk'

const { DynamoDB } = awsXRay.captureAWS(require('aws-sdk'))
const doc = new DynamoDB.DocumentClient({ service: ddb })

export const dbGet = (TableName, Key) =>
  new Promise(async (resolve, reject) => {
    console.info('DynamoDB GET: ', TableName, Key)

    const params = {
      Key,
      TableName
    }

    doc.get(params, responseHandler(resolve, reject, {
      type: 'dbGet',
      ...params
    }))
  })

export const dbQuery = (TableName, KeyConditionExpression, ExpressionAttributeNames, ExpressionAttributeValues, IndexName, Limit, FilterExpression, ExclusiveStartKey) =>
  new Promise(async (resolve, reject) => {
    console.info('DynamoDB QUERY', TableName, KeyConditionExpression, ExpressionAttributeNames, ExpressionAttributeValues, IndexName, Limit, FilterExpression, ExclusiveStartKey)
    const params = {
      ExclusiveStartKey,
      ExpressionAttributeNames,
      ExpressionAttributeValues,
      KeyConditionExpression,
      FilterExpression,
      Limit,
      IndexName,
      TableName
    }
    doc.query(params, responseHandler(resolve, reject, {
      type: 'dbQuery',
      ...params
    }))
  })

export const dbPut = (TableName, Item) =>
  new Promise((resolve, reject) => {
    console.info('DynamoDB PUT', TableName)

    doc.put({
      Item,
      TableName
    }, responseHandler(resolve, reject))
  })
