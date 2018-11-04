import request from 'superagent'
import {showError} from './error'
import {getUserRatingsForLocation} from './ratings'

export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS'
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS'
export const REQUEST_LOCATION = 'REQUEST_LOCATION'
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION'

export const requestAllLocations = () => {
  return {
    type: REQUEST_LOCATIONS
  }
}

export const receiveAllLocations = (locations) => {
  return {
    type: RECEIVE_LOCATIONS,
    locations: locations
  }
}

export const requestLocaion = () => {
  return {
    type: REQUEST_LOCATION
  }
}

export const receiveLocation = (location) => {
  return {
    type: RECEIVE_LOCATION,
    location: JSON.parse(location)
  }
}

export function getAllLocations() {
<<<<<<< HEAD
  const language="en"
=======
>>>>>>> 2c9b400bbc2fed789540f1ad2dd2e045efde8260
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
  const newLocation = {
    title: location.name,
    info_title: location.title,
    info: location.description,
    lat: location.lat,
    lng: location.lng
  }
  return (dispatch) => {
    return request
      .post('/api/v1/locations/add')
      .send(newLocation)
      .then(() => {
        return getAllLocations() 
      })
      .catch(() => {
        dispatch(showError('Could not save location'))
      })
  }
}

export function editLocation(location) {
  const updatedLocation = {
    id: location.id,
    title: location.title,
    info_title: location.info,
    info: location.description,
    lat: location.lat,
    lng: location.lng
  }
  const updatedRating = {
    id: location.ratingId,
    user_id: location.user,
    location_id: location.id,
    carparking: location.carparking,
    convenience: location.convenience,
    views: location.views
  }
  return (dispatch) => {
    return request
      .put('/api/v1/locations/edit')
      .send(updatedLocation)
      .then(() => {
        upsertRating(updatedRating)
      })
      .then(() => {
        return getLocation(location.id)
      })
      .catch(() => {
        dispatch(showError('Could not update location'))
      })
  }
}

export function upsertRating(rating){
  return request
    .post('/api/v1/ratings/edit')
    .send(rating)
    .then(() => {
      return getUserRatingsForLocation(rating.location_id, rating.user_id)
    })
    .catch(() => {
      dispatch(showError('Could not update rating'))
    })
}