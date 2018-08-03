
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table =>{
    table.increments('id').primary()
    table.string('full_name')
    table.string('email')
    table.text('facebook_accessToken')
    table.integer('facebook_id')
    table.text('google_accessToken')
    table.integer('google_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
