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

router.post('/', (req, res) => {
  const comment = req.body
  db.addComment(comment)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to add comment to database')
    })
})

router.put('/', (req, res) => {
  const comment = req.body
  db.updateComment(comment)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to update comment')
    })
})

router.delete('/', (req, res) => {
  const id = req.body.id
  db.delComment(id)
    .then(() => {
      console.error(err)
      res.status(500).send('Unable to delete comment from database')
    })
})

module.exports = router