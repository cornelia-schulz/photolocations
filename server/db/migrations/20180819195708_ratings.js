
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', table =>{
    table.increments('id').primary()
    table.integer('location_id')
    table.integer('user_id')
    table.integer('carparking')
    table.integer('convenience')
    table.integer('views')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ratings')
}
