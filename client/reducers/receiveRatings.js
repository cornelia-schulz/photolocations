import {RECEIVE_RATINGS} from '../actions/ratings'

function receiveRatings (state = [], action) {
  switch (action.type) {
    case RECEIVE_RATINGS:
      return action.ratings

    default:
      return state
  }
}

export default receiveRatings