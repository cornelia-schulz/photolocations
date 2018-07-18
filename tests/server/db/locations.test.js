const db = require ('../../../server/db')
const env = require('./testEnvironment')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => {
  env.cleanup(testDb)
})

test('getAllLocations returns a list of all locations', () => {
  return db.getAllLocations(testDb)
    .then(locations => {
      expect(locations.length).toBe(31)
    })
})