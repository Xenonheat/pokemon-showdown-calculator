import 'core-js'
import expressServer from 'toolbox/express/initiate-express'
import serverlessExpress from 'toolbox/express/serverless-express'
import * as pokemonMiddleware from 'middleware/pokemon'
import * as ROUTES from 'routes'

const app = expressServer() // Gets the koa object instatiated from the toolbox

// Pokemon Routes
app.get(ROUTES.GET_POKEMON, pokemonMiddleware.getPokemon)
app.get(ROUTES.GET_ALL_POKEMON, pokemonMiddleware.getAllPokemon)
app.post(ROUTES.ADD_NEW_POKEMON, pokemonMiddleware.addNewPokemon)
app.post(ROUTES.UPDATE_POKEMON, pokemonMiddleware.updatePokemon)
app.post(ROUTES.DELETE_POKEMON, pokemonMiddleware.deletePokemon)

export const handler = (event, context) => serverlessExpress(app, event, context)
