import React from 'react'
import {getLocation} from '../../actions/locations'
import Comments from '../Comments/Comments'
import {connect} from 'react-redux'

class Location extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      location: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getLocation(id)
      .then(location => {
        this.setState({location})
      })
  }

  render() {
    return (
      <div className="location">
        <img src={this.props.location.url} alt={this.props.location.title} />
        <div className="locationText">
          <h1>{this.props.location.title}</h1>
          <p>
            {this.props.location.info}
          </p>
          <p>
            {this.props.location.description}
          </p>
          <Comments id={this.props.match.params.id}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    location: state.receiveLocation
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getLocation: (id) => {
      return dispatch(getLocation(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)