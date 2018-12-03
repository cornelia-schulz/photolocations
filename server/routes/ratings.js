const express = require('express')
const db = require('../db/ratings')
const router = express.Router()


router.get('/', (req, res) => {
  db.getAllRatings()
    .then(ratings => {
      res.json(ratings)
    })
})

router.get('/:location/:user', (req, res) => {
  const location = Number(req.params.location)
  const user = Number(req.params.user)
  db.getAllUserRatingsForLocation(location, user)
    .then(ratings => {
      res.json(ratings)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to get ratings')
    })
})

router.post('/edit', (req, res) => {
  const rating = req.body
  db.upsertUserRating(rating)
  .then(() => {
    res.status(200).end()
  })
  .catch(err => {
    console.error(err)
    res.status(500).send('Unable to update rating')
  })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getAllRatingsForLocation(id)
    .then(ratings => {
      res.json(ratings)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to get ratings')
    })
})

module.exports = router