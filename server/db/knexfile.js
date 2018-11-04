// Update with your config settings.
// When running seeds on Heroku, use: knex seed:run --knexfile=./server/db/knexfile.js
const path = require('path')

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, './dev.sqlite3')
    },
    migrations: {
      directory: path.join(__dirname, './migrations')
    },
    seeds: {
      directory: path.join(__dirname, '../../tests/server/db/seeds')
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    migrations: {
      directory: path.join(__dirname, './migrations')
    },
    seeds: {
      directory: path.join(__dirname, '../../tests/server/db/seeds')
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: path.join(__dirname, '../../tests/server/db/seeds')
    }
  }

};
