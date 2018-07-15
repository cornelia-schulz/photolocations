import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Contact from '../../../client/components/Contact'

configure({adapter: new Adapter()})

test('<Contact />', () => {
  const expected = 'Get in touch!'
  const wrapper = shallow(<Contact />)
  const actual = wrapper.find('h1').text()

  expect(actual).toEqual(expected)
})