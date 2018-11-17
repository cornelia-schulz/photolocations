'use strict'
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)
const connection = knex

module.exports = {
  getAllRatings,
  getAllRatingsForLocation,
  getUserRatingForLocation,
  getAllUserRatingsForLocation,
  upsertUserRating
}

// function getAllRatings(testDb) {
//   const db = testDb || connection
//   return db('ratings')
//     .groupBy('ratings.location_id')
//     .sum('ratings.carparking as carparking')
//     .sum('ratings.convenience as convenience')
//     .sum('ratings.views as views')
//     .select()
// }

// Sum up ratings from all users for one location and calculate average
function getAllRatingsForLocation(id, testDb) {
  const db = testDb || connection
  return db('ratings')
    .where('ratings.location_id', id)
    .whereRaw('(carparking is not null or convenience is not null or "views" is not null)')
    .select(knex.raw('(sum(coalesce(carparking, 0)) * 1.0 + sum(coalesce(convenience, 0)) + sum(coalesce("views", 0))) /' +
      '(count(ratings.carparking) + count(ratings.convenience) + count(ratings.views)) as rating'))
}

function getUserRatingForLocation(location, user, testDb) {
  const db = testDb || connection
  return db('ratings')
    .where('ratings.location_id', location)
    .where('ratings.user_id', user)
    .select()
}

function getAllUserRatingsForLocation(location, user, testDb) {
  const db = testDb || connection
  return db('ratings')
    .where({
      location_id: location,
      user_id: user
    })
    .select()
}

function upsertUserRating(rating, testDb) {
  const db = testDb || connection
  if (rating.id === null && rating.carparking === null && rating.convenience === null && rating.views === null) {
    return
  } else if (rating.id === null) {
    const newRating = {
      location_id: rating.location_id,
      user_id: rating.user_id,
      carparking: rating.carparking,
      convenience: rating.convenience,
      views: rating.views
    }
    return db('ratings')
      .insert(newRating)
  } else {
    return db('ratings')
      .where('id', rating.id)
      .update(rating)
  }
}