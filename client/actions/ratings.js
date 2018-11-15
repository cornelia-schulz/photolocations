import request from 'superagent'
import {showError} from './error'

export const REQUEST_RATINGS = 'REQUEST_RATINGS'
export const RECEIVE_RATINGS = 'RECEIVE_RATINGS'
export const REQUEST_LOCATION_RATINGS = 'REQUEST_LOCATION_RATINGS'
export const RECEIVE_LOCATION_RATINGS = 'RECEIVE_LOCATION_RATINGS'
export const REQUEST_USER_LOCATION_RATINGS = 'REQUEST_USER_LOCATION_RATINGS'
export const RECEIVE_USER_LOCATION_RATINGS = 'RECEIVE_USER_LOCATION_RATINGS'
export const REQUEST_USER_LOCATION_DETAILED_RATINGS = 'REQUEST_USER_LOCATION_DETAILED_RATINGS'
export const RECEIVE_USER_LOCATION_DETAILED_RATINGS = 'RECEIVE_USER_LOCATION_DETAILED_RATINGS'

export const requestAllRatings = () => {
  return {
    type: REQUEST_RATINGS
  }
}

export const receiveAllRatings = (ratings) => {
  return {
    type: RECEIVE_RATINGS,
    ratings: ratings
  }
}

export const requestAllRatingsForLocation = () => {
  return {
    type: REQUEST_LOCATION_RATINGS
  }
}

export const receiveAllRatingsForLocation = (ratings) => {
  return {
    type: RECEIVE_LOCATION_RATINGS,
    ratings: ratings
  }
}

export const requestAllUserRatingsForLocation = () => {
  return {
    type: REQUEST_USER_LOCATION_RATINGS
  }
}

export const receiveAllUserRatingsForLocation = (ratings) => {
  return {
    type: RECEIVE_USER_LOCATION_RATINGS,
    ratings: ratings
  }
}

export const requestUserRatingsForLocation = () => {
  return {
    type: REQUEST_USER_LOCATION_DETAILED_RATINGS
  }
}

export const receiveUserRatingsForLocation = (ratings) => {
  const userRatings = ratings[0]
  if (userRatings.carparking === null) {
    userRatings.carparking = 0
  }
  if (userRatings.convenience === null) {
    userRatings.convenience = 0
  }
  if (userRatings.views === null) {
    userRatings.views
  }
  return {
    type: RECEIVE_USER_LOCATION_DETAILED_RATINGS,
    ratings: userRatings
  }
}

export function getAllRatings() {
  return (dispatch) => {
    return request
      .get('/api/v1/ratings')
      .then(res => {
        dispatch(receiveAllRatings(res.body))
      })
      .catch(() => {
        dispatch(showError('Could not retrieve ratings'))
      })
  }
}

export function getAllRatingsForLocation(id, user) {
  return (dispatch) => {
    return request
      .get('/api/v1/ratings/'+id)
      .then(res => {
        dispatch(receiveAllRatingsForLocation(res.body[0]))
      })
      .then(() => {
        return getAllUserRatingsForLocation(id, user)
      })
      .catch(() => {
        dispatch(showError('Could not retrieve ratings for this location'))
      })
  }
}

export function getAllUserRatingsForLocation(location, user) {
    return request
      .get('/api/v1/ratings/'+ location + '/' + user)
      .then(res => {
        dispatch(receiveAllUserRatingsForLocation(res.body))
      })
      .catch(() => {
        dispatch(showError('Could not retrieve ratings for this user for this location'))
      })
}

export function getUserRatingsForLocation(location, user) {
  return (dispatch) => {
    return request
      .get('/api/v1/ratings/'+ location + '/' + user)
      .then(res => {
        dispatch(receiveUserRatingsForLocation(res.body))
      })
      .catch(() => {
        dispatch(showError('Could not retrieve user ratings'))
      })
  }
}