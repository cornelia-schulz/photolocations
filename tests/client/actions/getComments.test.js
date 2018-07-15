import { getAllComments, RECEIVE_COMMENTS } from '../../../client/actions/comments'
import { SHOW_ERROR } from '../../../client/actions/error'

jest.mock('superagent', () => {
  return {
    get: (url) => {
        return Promise.resolve({text: JSON.stringify([
          {
            comment: {
              id: 5, 
              comment: 'Nice place'
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

