import {RECEIVE_LOCATIONS} from '../actions/locations'

function receiveLocations (state = [], action) {
  switch (action.type) {
    case RECEIVE_LOCATIONS:
      return action.locations

    default:
      return state
  }
}

export default receiveLocations