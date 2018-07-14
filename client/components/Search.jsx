import React from 'react'
import { connect } from 'react-redux'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.updateSearch = this.updateSearch.bind(this)
    this.keyPress = this.keyPress.bind(this)
  }

  updateSearch(event){
    this.setState({
      search: event.target.value.substr(0,50)
    })
  }

  keyPress(event) {
    if(event.keyCode == 13) {
      console.log('value', event.target.value)
      this.props.onChange(this.state.search)
    }
  }

  render() {
    return (
      <div className="search">
        <input type="text" name="search" id="search" value={this.state.search} onChange={this.updateSearch} onKeyDown={this.keyPress} />
        <label htmlFor="search"><i className="fa fa-search" aria-hidden="true"></i></label>
      </div>
    )
  }
}

export default Search