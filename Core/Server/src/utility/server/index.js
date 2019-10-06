import '@babel/polyfill'
import Koa from 'koa'
import Router from 'koa-router'

const koa = new Koa()
const app = new Router()

app.get('/:name', async (ctx) => {
  console.log('Name: ', ctx.params.name)
  ctx.body = `Hello, ${ctx.params.name}!\n`
})

koa.use(app.routes())
koa.listen(3000)
