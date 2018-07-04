
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table =>{
    table.increments('id').primary()
    table.integer('location_id')
    table.integer('user_id')
    table.string('comment')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
