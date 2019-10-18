import request from 'request'
import * as URL from 'constant/url'

export default () =>
  new Promise(async (resolve, reject) => {
    try {
      // Go to api website and collect the json file
      const pokemonData = request.get(URL.POKEMON_DATA_SOURCE_1, await (error, response, body) => {
        if (error) {
          console.log(error)
          return resolve(false)
        }
        return {
          response,
          body
        }
      })

      console.log({ pokemonData })

      resolve(pokemonData)
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
