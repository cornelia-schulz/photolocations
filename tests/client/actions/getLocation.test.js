import { getLocation, RECEIVE_LOCATION } from '../../../client/actions/locations'
import { SHOW_ERROR } from '../../../client/actions/error'

jest.mock('superagent', () => {
  return {
    get: (url) => {
      return Promise.resolve({text: JSON.stringify({
        id: 1,
        title: "Viaduct",
        label: '', 
        lat: -36,
        lng: 174
      })
    })
    }
  }
})

test ('GetLocation gets the correct actions', () => {
  const dispatch = jest.fn()
  return getLocation(1)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(RECEIVE_LOCATION)
    })
})

