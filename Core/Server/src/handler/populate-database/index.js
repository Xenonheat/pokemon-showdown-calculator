import 'core-js'
import expressServer from 'toolbox/express/initiate-express'
import serverlessExpress from 'toolbox/express/serverless-express'
import * as pokemonDataMiddleware from 'middleware/pokemon'
import * as ROUTES from 'routes'

const app = expressServer() // Gets the koa object instatiated from the toolbox

// Private Routes
app.post(ROUTES.POPULATE_POKEMON_TABLE, pokemonDataMiddleware.populatePokemonTable)
app.post(ROUTES.POPULATE_POKEMON_TYPE_TABLE, pokemonDataMiddleware.populatePokemonTypeTable)

export const handler = (event, context) => serverlessExpress(app, event, context)
