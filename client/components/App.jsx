import React, { Suspense, lazy } from 'react'
// import React from 'react'
import { BrowserRouter, Route, Switch, matchPath } from 'react-router-dom'
const Header = lazy(() => import('./Header'))
// import Header from './Header'
// const WrappedContainer = lazy(() => import('./Map/Container'))
import WrappedContainer from './Map/Container'
// const About = lazy(() => import('./About'))
import About from './About'
import Contact from './Contact'
// const Contact = lazy(() => import('./Contact'))
// const Location = lazy(() => import('./Locations/Location'))
import Location from './Locations/Location'
// const Login = lazy(() => import('./Login'))
import Login from './Login'
// const Footer = lazy(() => import('./Footer'))
import Footer from './Footer'
import ReactGA from 'react-ga'
import { withNamespaces } from 'react-i18next'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: ''
    }
    this.onChange = this.onChange.bind(this)
    this.initializeReactGA = this.initializeReactGA.bind(this)
  }

  componentDidMount() {
    this.initializeReactGA()
  }

  onChange(searchString) {
    this.setState({
      searchString: searchString
    })
  }

  initializeReactGA() {
    ReactGA.initialize('UA-124825499-1')
    // ReactGA.pageview('/homepage')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  render() {
    return (
      <BrowserRouter>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          <div className="container">
            <Route path='/' render={() => <Header onChange={this.onChange} />} />
            <Route exact path='/' render={(props) => <WrappedContainer searchString={this.state.searchString} {...props} />} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Switch>
              <Route path='/location/:id/' component={Location} />
            </Switch>
            {!matchPath.isExact && <Route path='/' component={Footer} />}
            <Route path='/login' component={Login} />
          </div>
        {/* </Suspense> */}
      </BrowserRouter>
    )
  }
}
export default withNamespaces('strings')(App)


