import awsServerlessExpress from 'aws-serverless-express'
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware'

export default (app, event, context) => {
  app.use(awsServerlessExpressMiddleware.eventContext())
  const server = awsServerlessExpress.createServer(app)

  return awsServerlessExpress.proxy(server, event, context)
}
