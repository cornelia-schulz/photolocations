var express = require('express');
var router = express.Router();
var { generateToken, sendToken } = require('../public/token.utils');
var passport = require('passport');
var config = require('../public/config.js');
var request = require('request');
require('../public/passport')();

router.route('/auth/facebook')
    .post(passport.authenticate('facebook-token', {session: false}), 
        function(req, res, next) {
        if (!req.user) {
            return res.send(401, 'User Not Authenticated');
        }
        req.auth = {
            id: req.user.id
        };

        next();
    }, generateToken, sendToken);

router.route('/auth/google')
    .post(passport.authenticate('google-token', {session: false}), 
        function(req, res, next) {
        if (!req.user) {
            return res.send(401, 'User Not Authenticated');
        }
        req.auth = {
            id: req.user.id
        };

        next();
    }, generateToken, sendToken);

module.exports = router;