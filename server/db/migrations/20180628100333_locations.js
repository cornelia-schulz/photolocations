
exports.up = (knex, Promise) => {
  return knex.schema.createTable('locations', table => {
    table.increments('id').primary()
    table.string('title')
    table.integer('language_id')
    table.string('label')
    table.decimal('lat', 9, 6)
    table.decimal('lng', 9, 6)
    table.string('info_title')
    table.text('info')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('locations')
}
