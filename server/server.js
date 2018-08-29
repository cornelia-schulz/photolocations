const path = require('path')
const express = require('express')
const server = express()
const cors = require('cors')
const passport = require('passport')
require('./passport.js')(passport)

const locationRoutes = require('./routes/locations')
const commentRoutes = require('./routes/comments')
const loginRoutes = require('./routes/login')
const ratingRoutes = require('./routes/ratings')
const nodemailerRoutes = require('./routes/nodemailer')


require('dotenv').config()
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
}

// view engine setup
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'jade')

server.use(passport.initialize())
server.use(cors(corsOption))
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/ratings', ratingRoutes)
server.use('/api/v1/nodemailer', nodemailerRoutes)
server.use('/api/v1/locations', locationRoutes)
server.use('/api/v1/comments', commentRoutes)
server.use('/api/v1/', loginRoutes)


server.get('*', (req, res) => {         
  res.render('default',
  { googleApiKey : GOOGLE_API_KEY, title : 'Photo Locations' }
  )
//  res.sendFile(path.resolve(__dirname, 'public', 'default.html'))        
})

module.exports = server
