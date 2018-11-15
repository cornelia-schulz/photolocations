import {SET_LANGUAGE} from '../../../client/actions/localise'
import receiveLanguage from '../../../client/reducers/receiveLanguage'

test ('receiveLanguage reducer', () => {
  expect (
    receiveLanguage ('en', {
      type: 'SET_LANGUAGE',
      language: 'en',
    })
  ).toBe ('en')
})