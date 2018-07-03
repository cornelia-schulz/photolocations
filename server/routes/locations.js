const express = require('express')
const db = require('../db')
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

module.exports = router