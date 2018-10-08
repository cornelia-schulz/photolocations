import {SET_LANGUAGE} from '../actions/localise'

function receiveLanguage (state = '', action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.language

    default:
      return state
  }
}

export default receiveLanguage