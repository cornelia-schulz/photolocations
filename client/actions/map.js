import request from 'superagent'
import {showError} from './error'

export const RECEIVE_SET_LOCATION = 'RECEIVE_SET_LOCATION'

const setLocationDetails = (location) => {
  return {
    type: RECEIVE_SET_LOCATION,
    location
  }
}

export function setLocation(location) {
  return (dispatch) => {
    dispatch(setLocationDetails(location))
  }
}