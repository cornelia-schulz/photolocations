import React from 'react'
import Comment from '../../../client/components/Comment'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'

configure({adapter: new Adapter()})

const initialState = {}
const mockStore = configureStore([thunkMiddleware])
let store

test('<Comment />', () => {
  store = mockStore(initialState)
  const expected = 2
  const wrapper = mount(<Provider store={store}><Comment /></Provider>)
  console.log(wrapper.html())
  const actual = wrapper.find('button').length
  expect(actual).toEqual(expected)
})
