import 'core-js'
import koa from 'toolbox/koa/initiate-koa'
import serverlessKoa from 'toolbox/koa/serverless-koa'
import Router from 'koa-router'
import * as pokemonMiddleware from 'middleware/pokemon'
import * as ROUTES from 'routes'

const server = koa() // Gets the koa object instatiated from the toolbox
const app = new Router() // Adds a new router object to the server to setup routing

// Pokemon Routes
// app.get(ROUTES.GET_POKEMON, pokemonMiddleware.getPokemon)
app.get(ROUTES.GET_ALL_POKEMON, pokemonMiddleware.getAllPokemon)
app.post(ROUTES.ADD_NEW_POKEMON, pokemonMiddleware.addNewPokemon)
app.post(ROUTES.UPDATE_POKEMON, pokemonMiddleware.updatePokemon)
app.post(ROUTES.DELETE_POKEMON, pokemonMiddleware.deletePokemon)

app.get(ROUTES.GET_POKEMON, async (ctx) => {
  console.log('Name: ', ctx.params)
  ctx.body = `Hello, ${ctx}!\n`
})

server.use(app.routes())

export const handler = (event, context) => serverlessKoa(app)
