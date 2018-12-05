import request from 'superagent'
import { showError } from './error';
export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'

export const requestUser = () => {
  return {
    type: REQUEST_USER
  }
}

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user: user
  }
}

export function getUser(email) {
  return (dispatch) => {
    return request
      .get('/api/v1/users/'+email)
      .then(res => {
        dispatch(receiveUser(res.body))
      })
      .catch(() => {
        dispatch(showError('Could not get user'))
      })
  }
}