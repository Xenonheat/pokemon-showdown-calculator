// import * as Dynamo from 'toolbox/aws/dynamo'
// import logger from 'logger'

export const getPokemon = (queryParams) =>
  new Promise((resolve, reject) => {
    try {
      // Get Pokemon
      console.log('Retrieving Pokemon: ', queryParams)
      resolve({
        Name: 'Hoho'
      })
    } catch (error) {
      console.error(error)
      reject(error)
    }
  })

export const getAllPokemon = (queryParam) =>
  new Promise((resolve, reject) => {
    try {

    } catch (error) {
      console.log(error)
      reject(error)
    }
  })

export const addNewPokemon = (queryParam) =>
  new Promise((resolve, reject) => {
    try {

    } catch (error) {
      console.log(error)
      reject(error)
    }
  })

export const updatePokemon = (queryParam) =>
  new Promise((resolve, reject) => {
    try {

    } catch (error) {
      console.log(error)
      reject(error)
    }
  })

export const deletePokemon = (queryParam) =>
  new Promise((resolve, reject) => {
    try {

    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
