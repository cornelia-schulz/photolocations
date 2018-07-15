import { getAllComments, RECEIVE_COMMENTS } from '../../../client/actions/comments'
import { SHOW_ERROR } from '../../../client/actions/error'

jest.mock('superagent', () => {
  return {
    get: (url) => {
        return Promise.resolve({text: JSON.stringify([
          {
            comment: {
              id: 5, 
              title: 'Viaduct'
            }
          }
      ])})
    }
  }
})

test ('GetAllComments gets the correct actions', () => {
  const dispatch = jest.fn()
  return getAllComments(4)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(RECEIVE_COMMENTS)
    })
})

// how to test if no id is passed in
// test ('GetAllComments returns an error with incorrect url', () => {
//   const dispatch = jest.fn()
//   return getAllComments(1)(dispatch)
//     .then(() => {
//       console.log("mock", dispatch.mock.calls[1][0])
//       expect(dispatch.mock.calls[0][0].type).toBe(SHOW_ERROR)
//     })
// })