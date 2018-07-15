import 'babel-register'
import {JSDOM}  from 'jsdom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter()
})

const dom = new JSDOM('<body></body>', {
  beforeParse (window) {
    window.innerWidth = 200
    window.innerHeight = 400
  }
})

global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigator