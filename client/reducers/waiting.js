import {SHOW_ERROR} from '../actions/error'
import {REQUEST_COMMENTS, RECEIVE_COMMENTS} from '../actions/comments'
import {REQUEST_LOCATIONS, RECEIVE_LOCATIONS, REQUEST_LOCATION, RECEIVE_LOCATION} from '../actions/locations'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return true

    case RECEIVE_COMMENTS:
      return false

    case REQUEST_LOCATIONS:
      return true

    case RECEIVE_LOCATIONS:
      return false

    case REQUEST_LOCATION:
      return true
      
    case RECEIVE_LOCATION:
      return false

    default:
      return state
  }
}

export default waiting