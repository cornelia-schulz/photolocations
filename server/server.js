const path = require('path')
const express = require('express')
const server = express()

const locationRoutes = require('./routes/locations')
const commentRoutes = require('./routes/comments')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/locations', locationRoutes)
server.use('/api/v1/comments', commentRoutes)

module.exports = server
