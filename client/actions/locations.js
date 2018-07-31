import request from 'superagent'
import {showError} from './error'

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS'
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION'

export const receiveAllLocations = (locations) => {
  return {
    type: RECEIVE_LOCATIONS,
    locations: locations
  }
}

export const receiveLocation = (location) => {
  return {
    type: RECEIVE_LOCATION,
    location: JSON.parse(location)
  }
}

export function getAllLocations() {
  return (dispatch) => {
    return request
      .get('/api/v1/locations')
      .then(res => {
        dispatch(receiveAllLocations(res.body))
      })
      .catch(() => {
        dispatch(showError('Could not retrieve locations'))
      })
  }
}

export function getLocation(id) {
  return (dispatch) => {
    return request
      .get('/api/v1/locations/'+id)
      .then(res => {
        dispatch(receiveLocation(res.text))
      })
      .catch(() => {
        dispatch(showError('Could not retrieve location information'))
      })
  }
}

export function addLocation(location) {
  return (dispatch) => {
    return request
      .post('api/v1/locations/')
      .send(location)
      .then(getAllLocations)
      .catch(() => {
        dispatch(showError('Could not save location'))
      })
  }
}