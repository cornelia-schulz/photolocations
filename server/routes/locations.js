const express = require('express')
const db = require('../db/locations')
const router = express.Router()

router.get('/', (req, res) => {
  db.getAllLocations()
    .then(locations => {
      res.json(locations)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getLocation(id)
    .then(location => {
      res.json(location)
    })
} )

router.post('/add', (req, res) => {
  const location = {
    title: req.body.name,
    lat: req.body.lat,
    lng: req.body.lng,
    info_title: req.body.title,
    info: req.body.description
  } 
  db.addLocation(location)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to add location to database')
    })
})

module.exports = router