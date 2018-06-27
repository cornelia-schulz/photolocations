const knex = require('knex')
const config = require('../knexfile').development
const db = knex(config)

module.exports = {
  getAllLocations
}

function getAllLocations() {
  return db('locations')
    .select()
}