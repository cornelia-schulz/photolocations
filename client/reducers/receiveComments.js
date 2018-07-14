import {RECEIVE_COMMENTS} from '../actions/comments'

function receiveComments (state = [], action) {
  switch (action.type){
    case RECEIVE_COMMENTS:
      return action.comments

    default: 
    return state
  }
}

export default receiveComments