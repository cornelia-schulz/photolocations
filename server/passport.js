'use strict';
require('express');
const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
const config = require('./config.js');

module.exports = function () {
  passport.use(new FacebookTokenStrategy({
          clientID: config.facebookAuth.clientID,
          clientSecret: config.facebookAuth.clientSecret
      },
      function (accessToken, refreshToken, profile, done) {
        console.log('facebook user')
        user.facebookUpsertUser(accessToken, refreshToken, profile, function(err, user) {
              return done(err, user);
          });             
      }));

  passport.use(new GoogleTokenStrategy({
          clientID: config.googleAuth.clientID,
          clientSecret: config.googleAuth.clientSecret
      },
     // upsert === update if doesn't exist
      function (accessToken, refreshToken, profile, done) {
          user.googleUpsertUser(accessToken, refreshToken, profile, function(err, user) {
              return done(err, user);
          });
      }));
};