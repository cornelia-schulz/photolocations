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
    .select('locations.id as id', 'locations.title as title', 'locations.label as label', 'locations.lat as lat', 'locations.lng as lng', 'locations.info as description', 'photos.title as imageTitle', 'photos.url as url', 'locations.info_title as info')
}

function getLocation(id, testDb) {
  const db = testDb || connection
  return db('locations')
  .leftJoin('photos', 'locations.id', 'photos.location_id')
  .leftJoin('comments', 'locations.id', 'comments.location_id')
  .where('locations.id', id)
  .select('locations.id as id', 'locations.title as title', 'locations.label as label', 'locations.lat as lat', 'locations.lng as lng', 'locations.info_title as info', 'locations.info as description', 'photos.title as imageTitle', 'photos.url as url', 'comments.comment as comment')
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