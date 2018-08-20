'use strict'
const environment = process.env.NODE_ENV || 'development'
const knex = require('knex')
const config = require('./knexfile')[environment]
const connection = knex(config)

module.exports = {
  getAllRatings,
  getAllRatingsForLocation
}

function getAllRatings(testDb) {
  const db = testDb || connection
  return db('ratings')
    .groupBy('ratings.location_id')
    .sum('ratings.carparking as carparking')
    .sum('ratings.convenience as convenience')
    .sum('ratings.views as views')
    .select()
}

function getAllRatingsForLocation(id, testDb) {
  const db = testDb || connection
  console.log('getting data from db')
  return db('ratings')
    .avg('ratings.carparking as carparking')
    .avg('ratings.convenience as convenience')
    .avg('ratings.views as views')
    .where('ratings.location_id', id)
    .select()
}
