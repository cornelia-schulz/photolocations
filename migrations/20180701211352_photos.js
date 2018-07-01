
exports.up = (knex, Promise) => {
  return knex.schema.createTable('photos', table => {
    table.increments('id').primary()
    table.integer('location_id')
    table.string('title')
    table.string('url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('photos')
};
