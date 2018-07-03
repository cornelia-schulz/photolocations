import React from 'react';
import {getLocation} from '../apiClient';

class Location extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    //console.log(id);
    getLocation(id)
      .then(location => {
        //console.log(location);
        this.setState({ location })
      })
  }

  render() {
    return (
      <div className="location">
        <img src={this.state.location.url} alt={this.state.location.title} />
        <div className="locationText">
          <h1>{this.state.location.title}</h1>
          <p>
            {this.state.location.info}
          </p>
        </div>
      </div>
    )
  }
}
export default Location