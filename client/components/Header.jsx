import React from 'react'

const Header = (props) => {

  return (
    <header>
      <nav className="navbar clearfix row" role="navigation">
        <div className="logo">
          <img src="/images/Logo.PNG" alt="Photo Locations" />
        </div>

        <div className="dropdown">
          <label htmlFor="search"><i className="fa fa-search" aria-hidden="true"></i></label>
          <input type="text" name="search" id="search" />
          <button className="dropbtn">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div className="dropdown-content">
            <a href="/">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
        
      </nav>
    </header>
  )

}

export default Header
