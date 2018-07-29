import {combineReducers} from 'redux'
import receiveComments from './receiveComments'
import errorMessage from './error-message'
import waiting from './waiting'
import receiveLocations from './receiveLocations'
import receiveLocation from './receiveLocation'
import receiveSearchString from './receiveSearchString'
import setNewLocation from './setNewLocation'


export default combineReducers({
  receiveComments,
  errorMessage,
  waiting,
  receiveLocations,
  receiveLocation,
  receiveSearchString,
  setNewLocation
})