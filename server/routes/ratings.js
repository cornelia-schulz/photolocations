const express = require('express')
const db = require('../db/ratings')
const router = express.Router()


router.get('/', (req, res) => {
  db.getAllRatings()
    .then(ratings => {
      res.json(ratings)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  console.log(id)
  db.getAllRatingsForLocation(id)
    .then(ratings => {
      console.log(ratings)
      res.json(ratings)
    })
})

module.exports = router