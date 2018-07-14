import {SHOW_ERROR} from '../actions/error'
import {REQUEST_COMMENTS, RECEIVE_COMMENTS} from '../actions/comments'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return true

    case RECEIVE_COMMENTS:
      return false

    default:
      return state
  }
}

export default waiting