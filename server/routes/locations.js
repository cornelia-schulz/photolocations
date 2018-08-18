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
  const location = req.body
  db.addLocation(location)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to add location to database')
    })
})

router.put('/edit', (req, res) => {
  const location = req.body
  db.updateLocation(location)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to update location')
    })
})

module.exports = router