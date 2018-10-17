import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Comments from '../../../client/components/Comments/Comments'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'

//create initial state
const initialState = {
  receiveComments: [
    {id: 1, comment: 'new comment'},
    {id: 2, comment: 'another comment'}
  ]
}
const mockStore = configureStore([thunkMiddleware])
let store

configure({adapter: new Adapter()})

test('<Comments /> renders named export', () => {
  store = mockStore(initialState)
  const wrapper = mount(<Provider store={store}><Comments t={(k) => 'translate hardcoded'} /></Provider>)

  expect(wrapper.contains(<h2>translate hardcoded</h2>)).toBe(true);
})

test('<Comments /> with children', () => {
  store = mockStore(initialState)
  const expected = 2
  const wrapper = mount(<Provider store={store}><Comments t={key => key} /></Provider>)
  const actual = wrapper.find('li').length

  expect(actual).toEqual(expected)
})