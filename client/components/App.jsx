import React from 'react'
import {BrowserRouter, Route, Switch, matchPath} from 'react-router-dom'
import Header from './Header'
import WrappedContainer from './Map/Container'
import About from './About'
import Contact from './Contact'
import Location from './Locations/Location'
import Login from './Login'
import EditLocation from './Locations/EditLocation'
import Footer from './Footer'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchString: ''
    }
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(searchString) {
    this.setState({
      searchString: searchString
    })
  }

  render(){
    return (
      <BrowserRouter>
        <div className="container">
          <Route path='/' render={() => <Header onChange={this.onChange} />} />
          <Route exact path='/' render={(props) => <WrappedContainer searchString={this.state.searchString} {...props} />} />
          {!matchPath.isExact && <Route path='/' component={Footer} />}
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Switch>
            <Route path='/location/:id/edit' component={EditLocation} />
            <Route path='/location/:id/' component={Location} />
          </Switch>
          <Route path='/login' component={Login} />
        </div>
      
      </BrowserRouter>
    );
  }
}
export default App


