import {RECEIVE_LOCATION} from '../actions/locations'

function receiveLocation (state = '', action) {
  switch (action.type) {
    case RECEIVE_LOCATION:
      return action.location

    default:
      return state
  }
}

export default receiveLocation