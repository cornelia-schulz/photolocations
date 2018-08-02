import React from 'react'
import {getLocation} from '../../actions/locations'
import Comments from '../Comments/Comments'
import { connect } from 'react-redux'

class Location extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getLocation(id)
      .then(location => {
        this.setState({ location })
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
          The sky calls to us dream of the mind's eye encyclopaedia
           galactica another world of brilliant syntheses nisi ut aliquid
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
             qui in ea voluptate velit esse quam nihil molestiae consequatur
              how far away cosmos. The sky calls to us Jean-Francois 
              Champollion a still more glorious dawn awaits Tunguska event 
              paroxysm of global death realm of the galaxies, dispassionate 
              extraterrestrial observer Sea of Tranquility. Laws of physics 
              cosmic fugue with pretty stories for which there's little good 
              evidence Vangelis rich in mystery dream of the mind's eye, across 
              the centuries, hydrogen atoms. Hypatia, paroxysm of global death 
              brain is the seed of intelligence extraordinary claims require 
              extraordinary evidence.
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