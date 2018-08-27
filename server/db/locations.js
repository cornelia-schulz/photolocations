'use strict'
const environment = process.env.NODE_ENV || 'development'
const knex = require('knex')
const config = require('./knexfile')[environment]
const connection = knex(config)

module.exports = {
  getAllLocations,
  getLocation,
  addLocation,
  updateLocation
}

function getAllLocations(testDb) {
  const db = testDb || connection
  return db('locations')
    .leftJoin('photos', 'locations.id', 'photos.location_id')	        
    .leftJoin('ratings', 'locations.id', 'ratings.location_id')
    .select('locations.id as id', 'locations.title as title', 'locations.label as label', 'locations.lat as lat', 'locations.lng as lng', 'locations.info as description', 'photos.title as imageTitle', 'photos.url as url', 'locations.info_title as info')
}

// function getAllLocations(testDb) {
//   const db = testDb || connection
//     return db('locations')
//         .leftJoin('ratings', 'locations.id', 'ratings.location_id')
//         .leftJoin('photos', 'locations.id', 'photos.location_id' )
//         .groupBy('locations.id')
//         .select(knex.raw('locations.id, locations.title, locations.label, locations.lat, locations.lng, locations.info_title as info, locations.info as description, photos.title as imageTitle, photos.url as url,' +
//                           'AVG( IFNULL(ratings.carparking, 0) + IFNULL(ratings.convenience, 0) + IFNULL(ratings.views, 0) ) / ' +
//                           '   (CASE WHEN ratings.carparking IS NULL THEN 0 ELSE 1 END + ' +
//                           '   CASE WHEN ratings.convenience IS NULL THEN 0 ELSE 1 END + ' +
//                           '   CASE WHEN ratings.views IS NULL THEN 0 ELSE 1 END) AS rating'
//                         ))
//                   }


function getLocation(id, testDb) {
  const db = testDb || connection
  return db('locations')
  .leftJoin('photos', 'locations.id', 'photos.location_id')
  .leftJoin('comments', 'locations.id', 'comments.location_id')
  .innerJoin('users', 'comments.user_id', 'users.id')
  .where('locations.id', id)
  .select('locations.id as id', 
          'locations.title as title', 
          'locations.label as label', 
          'locations.lat as lat', 
          'locations.lng as lng', 
          'locations.info_title as info', 
          'locations.info as description', 
          'photos.title as imageTitle', 
          'photos.url as url', 
          'comments.comment as comment', 
          'comments.date as date', 
          'users.full_name as user')
  .first()
}

function addLocation(location, testDb) {
  const db = testDb || connection
  return db('locations')
    .insert(location)
}

function updateLocation(location, testDb) {
  const db = testDb || connection
  return db('locations')
  .where('id', location.id)
  .update(location)
}