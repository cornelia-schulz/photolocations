
exports.up = (knex, Promise) => {
  return knex.schema.createTable('translations', table => {
    table.increments('id').primary()
    table.integer('location_id')
    table.string('language')
    table.string('title')
    table.string('label')
    table.decimal('lat', 9, 6)
    table.decimal('lng', 9, 6)
    table.string('info_title')
    table.text('info')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('translations')
}
