import { delComment } from '../../../client/actions/comments'
import { SHOW_ERROR } from '../../../client/actions/error'

jest.mock('superagent', () => {
  return {
    del: (url) => { 
        return {send: (comment) => {
          // comment = {id: 1}
          if(comment.id){
            return Promise.resolve({body: {id: 22}})
          } else{
            return Promise.reject(new Error('File not deleted'))
          }
        }
      } 
    }
  }
})

test ('DelComment returns an error with incorrect id', () => {
  const dispatch = jest.fn()
  return delComment('')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(SHOW_ERROR)
    })
})

test ('DelComment does not return an error with correct id', () => {
  const dispatch = jest.fn()
  return delComment(1)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(0)
    })
})