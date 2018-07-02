
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        {id: 1, location_id: 5, title: 'City Reflections', url: 'https://farm1.staticflickr.com/955/41144092244_c24e4f7914.jpg'},
        {id: 2, location_id: 6, title: 'Cornwallis', url: 'https://farm5.staticflickr.com/4794/40049838394_2dc421b0be.jpg'},
        {id: 3, location_id: 1, title: 'Sunset Time', url: 'https://farm6.staticflickr.com/5106/29455182653_346a474bbf.jpg'},
        {id: 4, location_id: 2, title: 'Auckland Sunset', url: 'https://farm2.staticflickr.com/1484/25506217204_7419b04d8a.jpg'},
        {id: 5, location_id: 3, title: 'Night Lights', url: 'https://farm9.staticflickr.com/8643/27942854854_51e5421dcf.jpg'},
        {id: 6, location_id: 8, title: 'Evening colours', url: 'https://farm2.staticflickr.com/1708/26409827951_cf3251e07a.jpg'}
      ]);
    });
};
