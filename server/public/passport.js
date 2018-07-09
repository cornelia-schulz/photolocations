'use strict';
require('express');
const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
const config = require('./config');
const knex = require('knex');
const upsert = require('knex-upsert');
const knexconfig = require('../../knexfile').development
const db = knex(knexconfig);

module.exports = function () {
  console.log(config.facebookAuth.clientSecret)
  passport.use(new FacebookTokenStrategy({
          clientID: config.facebookAuth.clientID,
          clientSecret: config.facebookAuth.clientSecret
      },
      // function (accessToken, refreshToken, profile, done) {
      //     User.upsertFbUser(accessToken, refreshToken, profile, function(err, user) {
      //         return done(err, user);
      //     });
      // }));
      function (accessToken, refreshToken, profile, done) {
        console.log('here')
        upsert({
          db,
          table: 'users',
          object: {id: 1},
          key: 'id'
        })
      }))

  passport.use(new GoogleTokenStrategy({
          clientID: config.googleAuth.clientID,
          clientSecret: config.googleAuth.clientSecret
      },
      // upsert === update if doesn't exist
      // function (accessToken, refreshToken, profile, done) {
      //     User.upsertGoogleUser(accessToken, refreshToken, profile, function(err, user) {
      //         return done(err, user);
      //     });
      // }));
      function (accessToken, refreshToken, profile, done) {
        upsert({
          db,
          table: 'users',
          object: {id: 2},
          key: 'id'
        })
      }))
};