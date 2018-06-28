import React from 'react';

class Search extends React.Component {
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
      <div className="search">
        <input type="text" name="search" id="search" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        <label htmlFor="search"><i className="fa fa-search" aria-hidden="true"></i></label>
      </div>
    )
  }
}

export default Search