import request from 'superagent'
import {showError} from './error'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'

export const requestComments = () => {
  return {
    type: REQUEST_COMMENTS
  }
}

export const receiveAllComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments: JSON.parse(comments)
  }
}

export const receiveComment = (id) => {
  return {
    type: RECEIVE_COMMENT
  }
}

export function getAllComments(id) {
  return (dispatch) => {
    return request
      .get(`/api/v1/comments/${id}`)
      .then(res => {
        dispatch(receiveAllComments(res.text))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred.'))
      })
  }
}

export function addComment(comment) {
  return (dispatch) => {
    return request
      .post('/api/v1/comments')
      .send(comment)
      .catch(() => {
        dispatch(showError('Could not save comment'))
      })
  }
}

export function delComment(id) {
  return (dispatch) => {
    return request
      .del('/api/v1/comments')
      .send({id: id})
      .catch(() => {
        dispatch(showError('Could not delete comment'))
      })
  }
}

export function updateComment(comment) {
  return (dispatch) => {
  return request
    .put('/api/v1/comments')
    .send(comment)
    .catch(() => {
      dispatch(showError('Could not update comment'))
    })
  }
}