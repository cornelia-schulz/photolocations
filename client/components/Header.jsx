import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  updateSearch(event){
    this.setState({
      search: event.target.value.substr(0,50)
    })
  }

  render() {
    return (
      <header>
        <nav className="navbar clearfix row" role="navigation">
          <div className="logo">
            <img src="/images/Logo.PNG" alt="Photo Locations" />
          </div>

          <div className="dropdown">
            <label htmlFor="search"><i className="fa fa-search" aria-hidden="true"></i></label>
            <input type="text" name="search" id="search" value={this.state.search} onChange={this.updateSearch.bind(this)} />
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


}

export default Header
