
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, full_name: 'Cornelia Schulz', email: 'cornelia_schulz@hotmail.com', accessToken: 'EAAW7tZCRJLQgBAElNqyQGv3Pw4bC9WazGPcTw1OQv6S9tZAmojtOuZABz0V1952iR09vQdDu5ttVQWSK84SgUm2sqhLpDi9UxeZB50dR48XJnqwt1BiN1gt926fz8uk8I7u49cFR0bTz4WxEg5yIpULFV1ZCGMfw5S92VsxrbyMe7ufjlkX3FCTlnqXAm3x0JoGMskCwKCwZDZD', social_id: 10156512168438126},
        {id: 2, full_name: 'Cornelia Schulz', email: 'cornelia.schulz.nz@gmail.com', accessToken: 'a29.GlvyBc7zQiJHeO7fMjaHEn2AWaxCB0Rg9T-CxyHrLXx-m…tBg8l31yX6CNn7tA_2--lpovwicjXw2WeDmrfvmCxC5WHrqyC', social_id: 114952009621172879795},
      ]);
    });
};
