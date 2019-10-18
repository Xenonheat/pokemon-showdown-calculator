import * as pokemonSystemManager from 'system/system-manager/pokemon'
import * as ERROR from 'constant/error'
import ResponseBuilder from 'Common/Builders/ResponseBuilder'

export const getPokemon = (req, res, next) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log('get here - getPokemon')

      // Perform middleware function
      const results = await pokemonSystemManager.getPokemonManager(['Hoho, Nidorina'])

      // Construct response
      const response = ResponseBuilder(true, 200, results)

      // Send success response back to client
      res.json(response)
    } catch (error) {
      // Log Error
      console.log(error)

      // Build and send error response
      const response = ResponseBuilder(false, 400, ERROR.GENERIC_ERROR_MESSAGE)

      // Send error response back to client
      res.status(400).json(response)
    }
  })

export const getAllPokemon = (req, res, next) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log('get here - getAllPokemon')

      // Perform middleware function
      const results = await pokemonSystemManager.getPokemonManager([])

      // Construct response
      const response = ResponseBuilder(true, 200, results)

      // Send response back to client
      res.json(response)
    } catch (error) {
      // Log Error
      console.log(error)
      // Build and send error response
      const response = ResponseBuilder(false, 400, ERROR.GENERIC_ERROR_MESSAGE)
      res.status(400).json(response)
    }
  })
