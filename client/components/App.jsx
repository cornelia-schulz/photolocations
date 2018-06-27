import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from './Header';
import Container from './Container';
import About from './About';
import Contact from './Contact';
import Location from './Location';


class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="container">
          <Route path='/' component={Header} />
          <Route exact path='/' component={Container} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/location/:name/:id' component={Location} />
        </div>
      
      </Router>
    );
  }
}
export default App


