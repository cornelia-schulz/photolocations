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

  // filter the ratings where not null
  // sum them
  // divide by count
  const r = [ratings[0].carparking, ratings[0].convenience, ratings[0].views]
  const sum = r.filter(a=> a !== null).reduce((a, b) => a + b)
  const divider = r.filter(a=> a !== null).length
  const avgRating = Math.round(sum/divider)
  return {
    type: RECEIVE_LOCATION_RATINGS,
    ratings: avgRating
  }
}

export const requestAllUserRatingsForLocation = () => {
  return {
    type: REQUEST_USER_LOCATION_RATINGS
  }
}

export const receiveAllUserRatingsForLocation = (ratings) => {
  const avgRating = Math.round((Number(ratings[0].carparking) + Number(ratings[0].convenience) + Number(ratings[0].views)) / 3)
  return {
    type: RECEIVE_USER_LOCATION_RATINGS,
    ratings: avgRating
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

export function getAllRatingsForLocation(id) {
  return (dispatch) => {
    return request
      .get('/api/v1/ratings/'+id)
      .then(res => {
        dispatch(receiveAllRatingsForLocation(res.body))
      })
      .catch(() => {
        dispatch(showError('Could not retrieve ratings for this location'))
      })
  }
}

export function getAllUserRatingsForLocation(location, user) {
  return (dispatch) => {
    return request
      .get('/api/v1/ratings/'+ location + '/' + user)
      .then(res => {
        dispatch(receiveAllUserRatingsForLocation(res.body))
      })
      .catch(() => {
        dispatch(showError('Could not retrieve ratings for this user for this location'))
      })
  }
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