import { getAllLocations, RECEIVE_LOCATIONS } from '../../../client/actions/locations'
import { SHOW_ERROR } from '../../../client/actions/error'

jest.mock('superagent', () => {
  return {
    get: (url) => {
      if (url.split('/')[1] === 'api') {
        return Promise.resolve({body: [
          {
            location: {
              id: 5, 
              title: 'Viaduct',
              label: '',
              lat: -36.841185,
              lng: 174.75952,
              info: 'great city views',
              imageTitle: 'City reflections',
              url: "https://farm1.staticFlickr.com"
            }
          }
        ]})
      } else {
        return Promise.reject(new Error('File not found'))
      }
    }
  }
})

test ('GetAllLocations gets the correct actions', () => {
  const dispatch = jest.fn()
  return getAllLocations('/api/v1/locations')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(RECEIVE_LOCATIONS)
    })
})

test ('GetAllLocations returns an error with incorrect url', () => {
  const dispatch = jest.fn()
  return getAllLocations('/v1/locations')(dispatch)
    .catch(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(SHOW_ERROR)
    })
})