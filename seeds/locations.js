
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, title: 'Westhaven', label: 'Westhaven', lat: -36.839914, lng: 174.747697, info: 'Great for city shots'},
        {id: 2, title: 'Okahu Bay Wharf', label: 'Okahu Bay', lat: -36.845246, lng: 174.816951, info: 'Great view towards city and Rangitoto'},
        {id: 3, title: 'Little Shoal Bay', label: 'Little Shoal Bay', lat: -36.816693, lng: 174.739157, info: 'Great views back towards the city with Harbour bridge'},
        {id: 4, title: 'The Wharf', label: 'The Wharf', lat: -36.826638, lng: 174.746667, info: 'Good view over the Harbour bridge'},
        {id: 5, title: 'Viaduct Events Centre', label: 'Viaduct Events Centre', lat: -36.841185, lng: 174.759520, info: 'Great for city shots and street photography'},
        {id: 6, title: 'Cornwallis Wharf', label: 'Cornwallis Wharf', lat: -37.011840, lng: 174.605286, info: 'Great for landscape work'},
        {id: 7, title: 'Bucklands Beach', label: 'Bucklands Beach', lat: -36.862400, lng: 174.899559, info: 'Great views of Rangitoto and good for landscapes'},
        {id: 8, title: 'Magazine Bay', label: 'Magazine Bay', lat: -36.883566, lng: 175.056192, info: 'Great for landscape and astro photography'},
        {id: 9, title: 'Piha', label: 'Piha', lat: -36.954760, lng: 174.468187, info: 'Great for sunsets and landscape work'},
        {id: 10, title: 'Hunua Falls', label: 'Hunua Falls', lat: -37.068781, lng: 175.089827, info: 'Great for landscapes and macro photography'},
      ]);
    });
};
