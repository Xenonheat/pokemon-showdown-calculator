import awsServerlessKoa from 'aws-serverless-koa'
import awsServerlessKoaMiddleware from 'aws-serverless-koa/middleware'

export default (app) => {
  app.use(awsServerlessKoaMiddleware())
  return awsServerlessKoa(app)
}
