import React from 'react'
import { configure, shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {About} from '../../../client/components/About'

jest.mock("react-ga")

configure({adapter: new Adapter()})

test('<About />', () => {
  const expected = 'About Photo Locations'
  const wrapper = shallow(<About t={(k) => 'About Photo Locations'} />)
  console.log(wrapper.find('h1').text())
  const actual = wrapper.find('h1').text()

  expect(actual).toEqual(expected)
})

test('<About /> renders named export', () => {
  const mounted = mount(<About t={(k) => 'About Photo Locations'} /> )
  expect(mounted.contains(<h1>About Photo Locations</h1>))
})