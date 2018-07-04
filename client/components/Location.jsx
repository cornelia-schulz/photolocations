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
        </div>
      </div>
    )
  }
}
export default Location