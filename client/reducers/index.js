import {combineReducers} from 'redux'
import receiveComments from './receiveComments'
import errorMessage from './error-message'
import waiting from './waiting'


export default combineReducers({
  receiveComments,
  errorMessage,
  waiting
})