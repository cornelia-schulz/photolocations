import { HashRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import Search from './Search';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (

        <header>
          <nav className="navbar clearfix row" role="navigation">
            <div className="logo">
              <img src="/images/Logo.PNG" alt="Photo Locations" />
            </div>
            <div className="headerRight">
              <Route exact path='/' render={() => <Search onChange={this.props.onChange} />} />
              <div className="dropdown">
                <button className="dropbtn">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div className="dropdown-content">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

    )
  }
}

export default Header
