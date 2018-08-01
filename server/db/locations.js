'use strict'
const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

module.exports = {
  getAllLocations,
  getLocation,
  addLocation
}

function getAllLocations(testDb) {
  const db = testDb || connection
  return db('locations')
    .join('photos', 'locations.id', 'photos.location_id')
    .select('locations.id as id', 'locations.title as title', 'locations.label as label', 'locations.lat as lat', 'locations.lng as lng', 'locations.info as info', 'photos.title as imageTitle', 'photos.url as url')
}

function getLocation(id, testDb) {
  const db = testDb || connection
  return db('locations')
  .join('photos', 'locations.id', 'photos.location_id')
  .join('comments', 'locations.id', 'comments.location_id')
  .where('locations.id', id)
  .select('locations.id as id', 'locations.title as title', 'locations.label as label', 'locations.lat as lat', 'locations.lng as lng', 'locations.info as info', 'photos.title as imageTitle', 'photos.url as url', 'comments.comment as comment')
  .first()
}

function addLocation(location, testDb) {
  const db = testDb || connection
  return db('locations')
    .insert(location)
}