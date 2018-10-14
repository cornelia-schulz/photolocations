import {RECEIVE_LOCATION} from '../../../client/actions/locations'
import receiveLocation from '../../../client/reducers/receiveLocation'

test ('receiveLocation reducer', () => {
  expect (
    receiveLocation('Auckland', {
      type: 'RECEIVE_LOCATION',
      location: 'Auckland',
    })
  ).toBe ('Auckland')
})


test('receiveLocation returns location during RECEIVE_COMMENTS', () => {
  const currentState = ''
  const action = {
    type: RECEIVE_LOCATION,
    location: 'Auckland'
  }
  const newState = receiveLocation(currentState, action)
  expect(newState).toEqual('Auckland')
})