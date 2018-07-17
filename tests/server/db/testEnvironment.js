const getDbConn = require('knex')

var testConfig = require('../../../knexfile').test

module.exports = {
  // Test database connection
  getTestDb: () => getDbConn(testConfig),

  // Create a separate in-memory database before each test
  initialise: (db) => {
    return db.migrate.latest()
      .then(() => {
        return db.seed.run()
      })
  },

  // Destroy the database connection after each test
  cleanup: (db) => {
    return db.destroy()
  }
}