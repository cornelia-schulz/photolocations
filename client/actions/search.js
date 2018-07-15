import request from 'superagent'
import {showError} from './error'

export const SET_SEARCH_STRING = 'SET_SEARCH_STRING'

export const setSearchString = (searchString) => {
  return {
    type: SET_SEARCH_STRING,
    searchString: searchString
  }
}