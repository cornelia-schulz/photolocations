import {RECEIVE_USER_LOCATION_RATINGS} from '../actions/ratings'

function receiveUserLocationRatings (state = [], action) {
  switch (action.type) {
    case RECEIVE_USER_LOCATION_RATINGS:
      return action.ratings

    default:
      return state
  }
}

export default receiveUserLocationRatings