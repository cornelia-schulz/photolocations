import {RECEIVE_LOCATIONS} from '../../../client/actions/locations'
import receiveLocations from '../../../client/reducers/receiveLocations'

test('receiveLocations returns comments during RECEIVE_LOCATIONS', () => {
  const currentState = []
  const action = {
    type: RECEIVE_LOCATIONS,
    locations: [{location: 'Auckland'}]
  }
  const newState = receiveLocations(currentState, action)
  expect(newState.length).toBe(1)
})