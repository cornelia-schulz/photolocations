'use strict'
const environment = process.env.NODE_ENV || 'development'
const knex = require('knex')
const config = require('./knexfile')[environment]
const connection = knex(config)

module.exports = {
  getAllRatings,
  getAllRatingsForLocation,
  getAllUserRatingsForLocation
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
  return db('ratings')
    .avg('ratings.carparking as carparking')
    .avg('ratings.convenience as convenience')
    .avg('ratings.views as views')
    .where('ratings.location_id', id)
    .select()
}

function getAllUserRatingsForLocation(location, user, testDb) {
  const db = testDb || connection
  return db('ratings')
    .avg('ratings.carparking as carparking')
    .avg('ratings.convenience as convenience')
    .avg('ratings.views as views')
    .where({
      location_id: location,
      user_id:  user
    })
    .select()
}

