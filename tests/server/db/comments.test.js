const db = require ('../../../server/db/comments')
const env = require('./testEnvironment')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => {
  env.cleanup(testDb)
})

test('getAllComments returns a list of all comments', () => {
  return db.getAllComments(4, testDb)
    .then(comments => {
      expect(comments.length).toBe(1)
    })
})

test('addComment adds a comment to comments table', () => {
  const comment = { comment: 'New comment' }
  return db.addComment(comment, testDb)
    .then(id => {
      expect(id.length).toBe(1)
    })
})

// test('deleteComment deletes a comment from the comment table', () => {
//   return db.delComment(4, testDb)

// })

// test('updateComment updates a comment in the comment table', () => {
//   const comment = { id: 2, comment: 'New comment' }
//   return db.updateComment(comment, testDb)
//     return (getAllComments())
//     .then(comment => {
//       expect(comment).toBe(1)
//     })
// })