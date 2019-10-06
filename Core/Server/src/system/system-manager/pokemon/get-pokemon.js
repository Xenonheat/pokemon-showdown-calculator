// import { getPokemon, getAllPokemon } from 'system/query-manager/pokemon'
import { getPokemon } from 'system/query-manager/pokemon'

export const getPokemonManager = (queryParams) =>
  new Promise((resolve, reject) => {
    try {
      const queryResults = getPokemon(queryParams)
      resolve(queryResults)
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
