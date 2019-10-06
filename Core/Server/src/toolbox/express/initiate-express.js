import Express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'

export default () => {
  const app = new Express()

  // Add necessary middleware to server
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(helmet())
  return app
}
