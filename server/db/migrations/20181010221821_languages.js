
exports.up = function(knex, Promise) {
  return knex.schema.createTable('languages', table => {
    table.increments('id').primary()
    table.string('language')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('languages')
}
