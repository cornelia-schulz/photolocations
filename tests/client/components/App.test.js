import React from 'react'
import {configure, shallow} from 'enzyme'

import App from '../../../client/components/App'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

test('<App />', () => {
  const expected = '<HashRouter />'
  const wrapper = shallow(<App t={key => key} />)
  expect(wrapper.text()).toBe(expected)
})
