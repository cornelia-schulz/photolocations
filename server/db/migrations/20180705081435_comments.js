
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table =>{
    table.increments('id').primary()
    table.integer('location_id')
    table.integer('user_id')
    table.string('comment')
    table.dateTime('date')
    table.integer('reply_To_Id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
}
