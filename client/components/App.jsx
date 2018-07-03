import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from './Header';
import Container from './Container';
import About from './About';
import Contact from './Contact';
import Location from './Location';


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
    console.log("I changed in the app too");
  }

  render(){
    return (
      <Router>
        <div className="container">
          <Route path='/' render={() => <Header onChange={this.onChange} />} />
          <Route exact path='/' render={(props) => <Container searchString={this.state.searchString} {...props} />} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/location/:id/' component={Location} />
        </div>
      
      </Router>
    );
  }
}
export default App


