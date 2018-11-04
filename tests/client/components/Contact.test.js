import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Contact} from '../../../client/components/Contact'

jest.mock("react-ga")
configure({adapter: new Adapter()})

test('<Contact />', () => {
  const expected = 'Get in touch!'
  const wrapper = shallow(<Contact t={(k) => 'Get in touch!'} />)
  const actual = wrapper.find('h1').text()

  expect(actual).toEqual(expected)
})