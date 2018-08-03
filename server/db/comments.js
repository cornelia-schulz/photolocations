'use strict'
const environment = process.env.NODE_ENV || 'production'
const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

module.exports = {
  getAllComments,
  updateComment,
  delComment,
  addComment
}

function getAllComments(id, testDb) {
  const db = testDb || connection
  return db('comments')
    .where('location_id', id)
    .select()
}

function addComment(comment, testDb){
  const db = testDb || connection
  return db('comments')
    .insert(comment)
}

function updateComment(comment, testDb){
  const db = testDb || connection
  return db('comments')
    .where('id', comment.id)
    .update(comment)
}

function delComment(id, testDb){
  const db = testDb || connection
  return db('comments')
    .where('id', id)
    .del()
}