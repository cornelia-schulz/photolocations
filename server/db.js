'use strict'
const knex = require('knex')
const config = require('../knexfile').development
const connection = knex(config)

module.exports = {
  getAllLocations,
  getLocation,
  getAllComments,
  updateComment,
  delComment,
  addComment,
  facebookUpsertUser,
  googleUpsertUser
}

function getAllLocations(testDb) {
  const db = testDb || connection
  return db('locations')
    .join('photos', 'locations.id', 'photos.location_id')
    .select('locations.id as id', 'locations.title as title', 'locations.label as label', 'locations.lat as lat', 'locations.lng as lng', 'locations.info as info', 'photos.title as imageTitle', 'photos.url as url')
}

function getLocation(id, testDb){
  const db = testDb || connection
  return db('locations')
  .join('photos', 'locations.id', 'photos.location_id')
  .join('comments', 'locations.id', 'comments.location_id')
  .where('locations.id', id)
  .select('locations.id as id', 'locations.title as title', 'locations.label as label', 'locations.lat as lat', 'locations.lng as lng', 'locations.info as info', 'photos.title as imageTitle', 'photos.url as url', 'comments.comment as comment')
  .first()
}

function getAllComments(id, testDb) {
  const db = testDb || connection
  return db('comments')
    .where('location_id', id)
    .select()
}

function addComment(comment, testDb){
  const db = testDb || connection
  return db('comments')
    .insert(comment)
}

function updateComment(comment, testDb){
  const db = testDb || connection
  return db('comments')
    .where('id', comment.id)
    .update(comment)
}

function delComment(id, testDb){
  const db = testDb || connection
  return db('comments')
    .where('id', id)
    .del()
}

function facebookUpsertUser(accessToken, refreshToken, profile, cb, testDb){
  const db = testDb || connection
  return findFacebookUser(profile)
    .then((result) => {
      if (result === undefined) {
        // if user does not exist, insert user
        const newUser = {
          full_name: profile.displayName,
          email: profile.emails[0].value,
          facebook_accessToken: profile.accessToken,
          facebook_id: profile.id,
          google_accessToken: null,
          google_id: null
        }
        return db('users')
          .insert(newUser)
      }
      else {
        return result
      }
    })
}

function findFacebookUser(profile, testDb){
  const db = testDb || connection
  return db('users')
    .where('facebook_id', profile.id)
    .select()
    .first()
}

function googleUpsertUser(accessToken, refreshToken, profile, cb){
  return findGoogleUser(profile)
    .then((result) => {
      const newUser = {
        full_name : profile.displayName,
        email: profile.emails[0].value,
        facebook_accessToken: null,
        facebook_id: null,
        google_accessToken: accessToken,
        google_id: profile.id
      }
      console.log('find google user')
      if (result === undefined) {
        console.log('did not find user')
        
        insertGoogleUser(newUser)
          .then((user) => {
            console.log('inserting user')
            cb(null, newUser)
          })
          
      }
      else {
        console.log('found user')
        cb(null, result)
        return result
      }
    })
}


function findGoogleUser(profile, testDb){
  const db = testDb || connection
  return db('users')
    .where('google_id', profile.id)
    .select()
    .first()
}

function insertGoogleUser(newUser, testDb){
  const db = testDb || connection
  return db('users')
    .insert(newUser)
}