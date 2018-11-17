import React from 'react'
import { connect } from 'react-redux'
import { setSearchString } from '../../actions/search'

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
      const searchString = this.state.search
      this.props.setSearchString(searchString)
    }
  }

  render() {
    return (
      <div className='search'>
        {/* <label className='inline' htmlFor='search'><i className='fa fa-search inline' aria-hidden='true'></i></label> */}
        <input className='inline' type='text' name='search' id='search' value={this.state.search} onChange={this.updateSearch} onKeyDown={this.keyPress} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSearchString: (searchString) => {
      return dispatch(setSearchString(searchString))
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)