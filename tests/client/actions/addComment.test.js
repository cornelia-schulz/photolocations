import { addComment, REQUEST_COMMENTS } from '../../../client/actions/comments'
import { SHOW_ERROR } from '../../../client/actions/error'

jest.mock('superagent', () => {
  return {
    post: (url) => {
     return { send: (comment) => {
       if(comment.comment){
         return Promise.resolve({body: {id:22}})
       } else {
         return Promise.reject(new Error('File not added'))
       }
     }}
    }
  }
})

test ('AddComment sends when comment is passed in', () => {
  const comment = { comment : 'New comment'}
  const dispatch = jest.fn()
  return addComment(comment)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(0)
    })
})

test ('AddComment returns an error with incorrect when incorrect comment format is passed in', () => {
  const dispatch = jest.fn()
  return addComment('')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(SHOW_ERROR)
    })
})