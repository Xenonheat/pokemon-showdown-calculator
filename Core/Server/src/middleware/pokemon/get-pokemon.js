import * as pokemonSystemManager from 'system/system-manager/pokemon'

export const getPokemon = (ctx) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log('get here - getPokemon')

      // Perform middleware function
      const response = await pokemonSystemManager.getPokemonManager(['Hoho, Nidorina'])

      // Send response back to client
      ctx.body(response)
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })

export const getAllPokemon = (ctx) =>
  new Promise((resolve, reject) => {
    try {
      console.log('get here - getAllPokemon')
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
