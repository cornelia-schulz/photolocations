'use strict'
require ('express')
const passport = require('passport')
const FacebookTokenStrategy = require('passport-facebook-token')
const GoogleTokenStrategy = require('passport-google-token').Strategy
const InstagramTokenStrategy = require('passport-instagram-token')
//const config = require('./config.js')
const user = require ('./db/db')
require ('dotenv').config ()
const facebookClientId = process.env.FACEBOOK_APP_ID
const facebookSecret = process.env.FACEBOOK_SECRET
const googleClientId = process.env.GOOGLE_CLIENT_ID
const googleSecret = process.env.GOOGLE_SECRET
const instagramClientId = process.env.INSTAGRAM_CLIENT_ID
const instagramSecret = process.env.INSTAGRAM_SECRET
// console.log (facebookClientId)
// console.log (facebookSecret)


module.exports = function () {
  passport.use (
    new FacebookTokenStrategy (
      {
        clientID: facebookClientId,
        clientSecret: facebookSecret,
      },
      function (accessToken, refreshToken, profile, done) {
        console.log ('facebook user')
        throw 'Hi there'
        user.facebookUpsertUser (accessToken, refreshToken, profile, function (
          err,
          user
        ) {
          return done (err, user)
        })
      }
    )
  )

  passport.use (
    new GoogleTokenStrategy (
      {
        clientID: googleClientId,
        clientSecret: googleSecret,
      },
      // upsert === update if doesn't exist
      function (accessToken, refreshToken, profile, done) {
        console.log ('passport google user')
        user.googleUpsertUser (accessToken, refreshToken, profile, function (
          err,
          user
        ) {
          return done (err, user)
        })
      }
    )
  )

  //   passport.use(new InstagramTokenStrategy({
  //       clientID: instagramClientId,
  //       clientSecret: instagramSecret,
  //       passReqToCallback: true
  //   },
  //     function(req, accessToken, refreshToken, profile, next) {
  //         User.findOrCreate({'instagram.id': profile.id}, function(error, user) {
  //             return next(error, user)
  //         })
  //     }))
}
