
exports.up = (knex, Promise) => {
  return knex.schema.createTable('locations', table => {
    table.increments('id').primary()
    table.string('title')
    table.string('label')
    table.decimal('lat')
    table.decimal('lng')
    table.string('info_title')
    table.text('info')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('locations')
}
