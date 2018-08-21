import {RECEIVE_USER_LOCATION_DETAILED_RATINGS} from '../actions/ratings'

function receiveUserRatingsForLocation (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER_LOCATION_DETAILED_RATINGS:
      return action.ratings

    default:
      return state
  }
}

export default receiveUserRatingsForLocation