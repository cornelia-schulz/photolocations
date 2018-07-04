const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getAllComments(id)
    .then(comments => {
      res.json(comments)
    })
})




module.exports = router