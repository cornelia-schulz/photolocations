'use strict'
const environment = process.env.NODE_ENV || 'production'
const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

module.exports = {
  facebookUpsertUser,
  googleUpsertUser
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