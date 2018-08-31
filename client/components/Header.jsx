import { Route, Link } from 'react-router-dom'
import React from 'react'
import Search from './Map/Search'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  toggleVisibility() {
    const menu = document.getElementsByClassName('dropdown-content')[0]
    if (menu.style.display === "none") {
      menu.style.display = "block"
    } else {
      menu.style.display = "none"
    }
  }

  render() {
    return (

      <header>
        <nav className="navbar" role="navigation">
          <div className="logo header  header-left">
            <img src="/images/Logo.PNG" alt="Photo Locations" />
          </div>
          <div className="header">
            <Route exact path='/' component={Search} />
          </div>
          <div className="dropdown header">
            <button className="dropbtn" onClick={this.toggleVisibility}>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/" onClick={this.toggleVisibility}>Home</Link>
              <Link to="/about" onClick={this.toggleVisibility}>About</Link>
              <Link to="/contact" onClick={this.toggleVisibility}>Contact</Link>
            </div>
          </div>
        </nav>
      </header>

    )
  }
}

export default Header
