import {RECEIVE_COMMENTS} from '../../../client/actions/comments'
import receiveComments from '../../../client/reducers/receiveComments'

test('receiveComments returns comments during RECEIVE_COMMENTS', () => {
  const currentState = []
  const action = {
    type: RECEIVE_COMMENTS,
    comments: [{comment: 'test comment'}]
  }
  const newState = receiveComments(currentState, action)
  expect(newState.length).toBe(1)
})