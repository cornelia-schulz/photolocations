import { getAllLocations, RECEIVE_LOCATIONS } from '../../../client/actions/locations'
import { SHOW_ERROR } from '../../../client/actions/error'

jest.mock('superagent', () => {
  return {
    get: (url) => {
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
    }
  }
})

test ('GetAllLocations gets the correct actions', () => {
  const dispatch = jest.fn()
  return getAllLocations()(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(RECEIVE_LOCATIONS)
    })
})

