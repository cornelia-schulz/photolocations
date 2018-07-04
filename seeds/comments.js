
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, location_id: 1, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 2, location_id: 2, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 3, location_id: 3, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 4, location_id: 4, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 5, location_id: 5, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 6, location_id: 6, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 7, location_id: 7, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 8, location_id: 8, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 9, location_id: 9, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 10, location_id: 10, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 11, location_id: 11, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 12, location_id: 12, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 13, location_id: 13, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 14, location_id: 14, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 15, location_id: 15, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 16, location_id: 16, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 17, location_id: 17, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 18, location_id: 18, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 19, location_id: 19, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 20, location_id: 20, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 21, location_id: 21, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 22, location_id: 22, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 23, location_id: 23, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 24, location_id: 24, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 25, location_id: 25, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 26, location_id: 26, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 27, location_id: 27, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 28, location_id: 28, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 29, location_id: 29, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 30, location_id: 30, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
        {id: 31, location_id: 31, user_id: 2, comment: 'I have been there and thoroughly enjoyed it'},
      ]);
    });
};
