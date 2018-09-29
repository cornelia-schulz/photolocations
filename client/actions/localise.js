import request from 'superagent'
import {showError} from './error'

export const SET_LANGUAGE = 'SET_LANGUAGE'

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    language: language
  }
}
