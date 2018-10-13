const express = require('express')
const db = require('../db/locations')
const router = express.Router()


router.get('/language', (req, res) => {
  const language = (req.params.language)
  db.getAllLocations(language)
    .then(locations => {
      res.json(locations)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to get locations from database')
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getLocation(id)
    .then(location => {
      res.json(location)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to get location from database')
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