import request from 'superagent'
import {showError} from './error'

export const REQUEST_RATINGS = 'REQUEST_RATINGS'
export const RECEIVE_RATINGS = 'RECEIVE_RATINGS'
export const REQUEST_LOCATION_RATINGS = 'REQUEST_LOCATION_RATINGS'
export const RECEIVE_LOCATION_RATINGS = 'RECEIVE_LOCATION_RATINGS'

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
  const avgRating = Math.round((Number(ratings[0].carparking) + Number(ratings[0].convenience) + Number(ratings[0].views)) / 3)
  return {
    type: RECEIVE_LOCATION_RATINGS,
    ratings: avgRating
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