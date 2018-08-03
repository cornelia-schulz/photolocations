
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      console.log('photos seed')
      // Inserts seed entries
      return knex('photos').insert([
        {id: 1, location_id: 5, title: 'City Reflections', url: 'https://farm1.staticflickr.com/955/41144092244_9155fa4c44_h.jpg'},
        {id: 2, location_id: 6, title: 'Cornwallis', url: 'https://farm5.staticflickr.com/4794/40049838394_a154ade512_h.jpg'},
        {id: 3, location_id: 1, title: 'Sunset Time', url: 'https://farm6.staticflickr.com/5106/29455182653_a8c61fea3c_h.jpg'},
        {id: 4, location_id: 2, title: 'Auckland Sunset', url: 'https://farm2.staticflickr.com/1484/25506217204_80bfc47f62_h.jpg'},
        {id: 5, location_id: 3, title: 'Night Lights', url: 'https://farm9.staticflickr.com/8643/27942854854_389faae4e9_h.jpg'},
        {id: 6, location_id: 8, title: 'Evening colours', url: 'https://farm2.staticflickr.com/1708/26409827951_daaf3417b4_h.jpg'},
        {id: 7, location_id: 18, title: 'Bethells Beach', url: 'https://drscdn.500px.org/photo/115879835/m%3D900/v2?user_id=12354065&webp=true&sig=9d75f73363a9c18479044839b3539eda6ee90273a9698f76bcfdf87fb37597fa'},
        {id: 8, location_id: 17, title: 'Sunset at the Three Sisters', url: 'https://farm5.staticflickr.com/4408/36193884502_4896fdca13_h.jpg'},
        {id: 9, location_id: 19, title: 'Mount Ngauruhoe', url: 'https://farm3.staticflickr.com/2909/33989778786_86b8647c4c_h.jpg'},
        {id: 10, location_id: 12, title: 'Light the way!', url: 'https://farm5.staticflickr.com/4359/37302489935_dc80976159_h.jpg'},
        {id: 11, location_id: 23, title: 'Manukau Heads Lighthouse', url: 'https://farm5.staticflickr.com/4360/36080354883_fccfd0ab33_h.jpg'},
        {id: 12, location_id: 24, title: 'A bit of Smoke', url: 'https://farm5.staticflickr.com/4636/39490967991_c19b7448e3_h.jpg'},
        {id: 13, location_id: 25, title: 'McLaren Falls', url: 'https://farm1.staticflickr.com/798/25949303927_9bc83ffc5c_h.jpg'},
        {id: 14, location_id: 26, title: 'A wet-sunny day', url: 'https://farm5.staticflickr.com/4335/36289237740_9e3ee9fede_h.jpg'},
        {id: 15, location_id: 27, title: 'Whatipu Beach', url: 'https://farm5.staticflickr.com/4500/37729433081_e6f0b0d7e1_h.jpg'},
        {id: 16, location_id: 9, title: 'Lion meets Kiwi', url: 'https://farm5.staticflickr.com/4195/34953677051_6ca661c871_h.jpg'},
        {id: 17, location_id: 28, title: 'Emerald Lake', url: 'https://farm3.staticflickr.com/2807/34109413321_0cb37dcb96_h.jpg'},
        {id: 18, location_id: 29, title: 'What? The grass is greener...', url: 'https://farm3.staticflickr.com/2941/33085039924_cecabb4c05_h.jpg'},
        {id: 19, location_id: 20, title: 'Evening over Mt Cook', url: 'https://farm4.staticflickr.com/3754/33073604871_399d2db7b8_h.jpg'},
        {id: 20, location_id: 30, title: 'Sunset', url: 'https://farm1.staticflickr.com/137/31387915071_e242973521_h.jpg'},
        {id: 21, location_id: 31, title: 'Rain Clouds', url: 'https://farm8.staticflickr.com/7077/26632121073_947e53e5ce_h.jpg'},
        {id: 22, location_id: 21, title: 'Lake Tekapo', url: 'https://farm4.staticflickr.com/3919/18519428554_9fd56d44c0_h.jpg'},
        {id: 23, location_id: 22, title: 'Mountain View', url: 'https://farm6.staticflickr.com/5590/15136300022_322389c086_b.jpg'},
        {id: 24, location_id: 16, title: 'Tangermuende', url: 'https://farm2.staticflickr.com/1827/42473239484_bd76d9c490_b.jpg'},
        {id: 25, location_id: 14, title: 'Uenglinger Tor', url: 'https://farm2.staticflickr.com/1785/42286982755_489ab5020c_b.jpg'},
        {id: 26, location_id: 15, title: 'Pulverturm', url: 'https://farm2.staticflickr.com/1803/41380901020_3e92a84d2c_b.jpg'},
        {id: 27, location_id: 13, title: 'Tangermuender Tor', url: 'https://farm1.staticflickr.com/836/43191233871_a46451ebee_b.jpg'},
        {id: 28, location_id: 4, title: 'Auckland from Mt Eden', url: 'https://farm9.staticflickr.com/8701/16462857823_20072dffe6_b.jpg'},
        {id: 29, location_id: 7, title: 'Rangitoto', url: 'https://farm2.staticflickr.com/1639/26262031736_2d7b1ef01b_b.jpg'},
        {id: 30, location_id: 11, title: 'Wellington Sunset', url: 'https://farm9.staticflickr.com/8650/16642665015_47a7e0c49e_b.jpg'},
        {id: 31, location_id: 10, title: 'Hunua Falls', url: 'https://drscdn.500px.org/photo/115764073/m%3D900/v2?user_id=12354065&webp=true&sig=15471fa66fc82cc1f290f84591a3fafa86dc8a437057ce1fe415b478f97cbbc9'},
      ])
    })
}
