
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, title: 'Westhaven', label: '', lat: -36.839914, lng: 174.747697, info_title: 'Great for city shots', info: ''},
        {id: 2, title: 'Okahu Bay Wharf', label: '', lat: -36.845246, lng: 174.816951, info_title: 'Great for city shots', info: 'Great view towards city and Rangitoto'},
        {id: 3, title: 'Little Shoal Bay', label: '', lat: -36.816693, lng: 174.739157, info_title: 'Great for city shots', info: 'Great views back towards the city with Harbour bridge'},
        {id: 4, title: 'Mount Eden', label: '', lat: -36.877477, lng: 174.764972, info_title: 'Great for city shots', info: 'Good views over the city'},
        {id: 5, title: 'Viaduct Events Centre', label: '', lat: -36.841185, lng: 174.759520, info_title: 'Great for city shots', info: 'Great for city shots and street photography'},
        {id: 6, title: 'Cornwallis Wharf', label: '', lat: -37.011840, lng: 174.605286, info_title: 'Great for city shots', info: 'Great for landscape work'},
        {id: 7, title: 'Bucklands Beach', label: '', lat: -36.862400, lng: 174.899559, info_title: 'Great for city shots', info: 'Great views of Rangitoto and good for landscapes'},
        {id: 8, title: 'Magazine Bay', label: '', lat: -36.883566, lng: 175.056192, info_title: 'Great for city shots', info: 'Great for landscape and astro photography'},
        {id: 9, title: 'Piha', label: '', lat: -36.954760, lng: 174.468187, info_title: 'Great for city shots', info: 'Great for sunsets and landscape work'},
        {id: 10, title: 'Hunua Falls', label: '', lat: -37.068781, lng: 175.089827, info_title: 'Great for city shots', info: 'Great for landscapes and macro photography'},
        {id: 11, title: 'Mt Vic', label: '', lat: -41.295962, lng: 174.794103, info_title: 'Great for city shots', info: ''},
        {id: 12, title: 'Jack\'s Lighthouse', label: '', lat: -44.443428202490125, lng: 171.26087375983275, info_title: 'Great for city shots', info: ''},
        {id: 13, title: 'Tangermuende Gate', label: '', lat: 52.599832, lng: 11.864420, info_title: 'Great for city shots', info: ''},
        {id: 14, title: 'Uenglingen Gate', label: '', lat: 52.608111, lng: 11.851788, info_title: 'Great for city shots', info: ''},
        {id: 15, title: 'Powder Tower', label: '', lat: 52.611668, lng: 11.830325, info_title: 'Great for city shots', info: ''},
        {id: 16, title: 'City Wall', label: '', lat: 52.539563, lng: 11.972524, info_title: 'Great for city shots', info: ''},
        {id: 17, title: 'Three Sisters', label: '', lat: -38819231, lng: 174.580932, info_title: 'Great for city shots', info: ''},
        {id: 18, title: 'Bethells', label: '', lat: -36.894985, lng: 174.445323, info_title: 'Great for city shots', info: ''},
        {id: 19, title: 'Mount Ngauruhoe', label: '', lat: -39.156830, lng: 175.632320, info_title: 'Great for city shots', info: ''},
        {id: 20, title: 'Hooker Valley Track', label: '', lat: -43.715701, lng: 170.094381, info_title: 'Great for city shots', info: ''},
        {id: 21, title: 'Tekapo', label: '', lat: -44.001419, lng: 170.475204, info_title: 'Great for city shots', info: ''},
        {id: 22, title: 'Peter\'s Lookout', label: '', lat: -44.088736, lng: 170.132834, info_title: 'Great for city shots', info: 'Great views towards Mt Cook'},
        {id: 23, title: 'Manukau Heads Lighthouse', label: '', lat: -37.054956, lng: 174.549914, info_title: 'Great for city shots', info: ''},
        {id: 24, title: 'White Island', label: '', lat: -37.522541, lng: 177.179466, info_title: 'Great for city shots', info: ''},
        {id: 25, title: 'McLaren Falls', label: '', lat: -37.805953, lng: 176.044890, info_title: 'Great for city shots', info: ''},
        {id: 26, title: 'Karekare Beach', label: '', lat: -36.999046, lng: 174.475589, info_title: 'Great for city shots', info: ''},
        {id: 27, title: 'Whatipu Beach', label: '', lat: -37.048075, lng: 174.491498, info_title: 'Great for city shots', info: ''},
        {id: 28, title: 'Emerald Lakes', label: '', lat: -39.134657, lng: 175.654851, info_title: 'Great for city shots', info: ''},
        {id: 29, title: 'Tiritiri Matangi', label: '', lat: -36.602700, lng: 174.889106, info_title: 'Great for city shots', info: ''},
        {id: 30, title: 'Musick Point', label: '', lat: -36.846405, lng: 174.900669, info_title: 'Great for city shots', info: ''},
        {id: 31, title: 'Mangawhai Heads', label: '', lat: -36.080575, lng: 174.596958, info_title: 'Great for city shots', info: ''}
      ])
    })
}
