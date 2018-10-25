'use strict'
const environment = process.env.NODE_ENV || 'development'
const knex = require('knex')
const config = require('./knexfile')[environment]
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
    .leftJoin('users', 'users.id', 'comments.user_id')
    .where('location_id', id)
    .select('comments.id as id', 'comments.location_id as location_id', 'comments.user_id as user_id', 'comments.comment as comment', 'comments.date as date', 'comments.reply_To_Id as reply_To_Id', 'users.full_name as full_name', 'users.email as email', 'users.facebook_id as facebook.id', 'users.google_accessToken as google_accessToken', 'users.google_id  as google_id')
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