const path = require('path')
const express = require('express')
const server = express()

const locationRoutes = require('./routes/locations')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/locations', locationRoutes)

module.exports = server
