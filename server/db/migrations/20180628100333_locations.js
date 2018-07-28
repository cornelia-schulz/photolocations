
exports.up = (knex, Promise) => {
  return knex.schema.createTable('locations', table => {
    table.increments('id').primary()
    table.string('title')
    table.string('label')
    table.integer('lat')
    table.integer('lng')
    table.string('info')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('locations')
}
