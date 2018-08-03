
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table =>{
    table.increments('id').primary()
    table.string('full_name')
    table.string('email')
    table.string('facebook_accessToken')
    table.bigint('facebook_id')
    table.string('google_accessToken')
    table.bigint('google_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
