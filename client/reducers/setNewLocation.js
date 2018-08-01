import {RECEIVE_SET_LOCATION} from '../actions/map'

function setNewLocation (state = [], action) {
  switch (action.type) {
    case RECEIVE_SET_LOCATION:
      return action.location

    default:
      return state
  }
}

export default setNewLocation