
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ratings').del()
    .then(function () {
      // Inserts seed entries
      return knex('ratings').insert([
        {id: 1, location_id: 1, user_id: 2, carparking: 4, convenience: 4, views: 5 },
        {id: 2, location_id: 2, user_id: 2, carparking: 4, convenience: 4, views: 4 },
        {id: 3, location_id: 3, user_id: 2, carparking: 4, convenience: 4, views: 3 },
        {id: 4, location_id: 1, user_id: 1, carparking: 5, convenience: 5, views: 4 },
        {id: 5, location_id: 2, user_id: 1, carparking: 4, convenience: 4, views: 3 },
        {id: 6, location_id: 3, user_id: 1, carparking: 4, convenience: 4, views: 4 }
      ])
    })
}