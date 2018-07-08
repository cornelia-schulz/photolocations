
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table =>{
    table.increments('id').primary()
    table.string('full_name')
    table.string('email')
    table.string('accessToken')
    table.integer('social_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
