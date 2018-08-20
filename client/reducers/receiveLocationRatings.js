import {RECEIVE_LOCATION_RATINGS} from '../actions/ratings'

function receiveLocationRatings (state = [], action) {
  switch (action.type) {
    case RECEIVE_LOCATION_RATINGS:
      return action.ratings

    default:
      return state
  }
}

export default receiveLocationRatings