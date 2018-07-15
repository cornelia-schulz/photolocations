import { updateComment } from '../../../client/actions/comments'
import { SHOW_ERROR } from '../../../client/actions/error'

jest.mock('superagent', () => {
  return {
    put: (url) => {
      return { send: (comment) => {
        if(comment.id) {
          return Promise.resolve({body: {id: comment.id }})
        } else {
          return Promise.reject(new Error('Could not update comment'))
        }
      }} 
    }
  }
})


test ('UpdateComment returns an error with incorrect url', () => {
  const comment = { comment : 'New comment', id: 2 }
  const dispatch = jest.fn()
  return updateComment(comment)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(0)
    })
})

test ('UpdateComment returns an error with incorrect when incorrect comment format is passed in', () => {
  const dispatch = jest.fn()
  return updateComment('')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(SHOW_ERROR)
    })
})