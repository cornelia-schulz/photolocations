
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, full_name: 'Cornelia Schulz', 
        email: 'cornelia_schulz@hotmail.com', 
        facebook_accessToken: 'EAAW7tZCRJLQgBAElNqyQGv3Pw4bC9WazGPcTw1OQv6S9tZAmojtOuZABz0V1952iR09vQdDu5ttVQWSK84SgUm2sqhLpDi9UxeZB50dR48XJnqwt1BiN1gt926fz8uk8I7u49cFR0bTz4WxEg5yIpULFV1ZCGMfw5S92VsxrbyMe7ufjlkX3FCTlnqXAm3x0JoGMskCwKCwZDZD', 
        facebook_id: 10156512168438126,
        google_accessToken: null,
        google_id: null},
        {id: 2, full_name: 'Cornelia Schulz', 
        email: 'cornelia.schulz.nz@gmail.com', 
        facebook_accessToken: null,
        facebook_id: null,
        google_accessToken: 'a29.GlvyBc7zQiJHeO7fMjaHEn2AWaxCB0Rg9T-CxyHrLXx-m…tBg8l31yX6CNn7tA_2--lpovwicjXw2WeDmrfvmCxC5WHrqyC',
        google_id: 11495200962117287},
      ])
    })
}
