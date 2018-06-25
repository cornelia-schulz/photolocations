import React from 'react';
import Marker from './Marker';
import {GoogleApiWrapper} from 'google-maps-react';
import Map from './Map';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [
        {
          title: 'Westhaven',
          label: 'Westhaven',
          position: {
            lat: -36.842277,
            lng: 174.750224
          }
        }
      ]
    }
  }

  render(){
    const style = {
      width: '100vh',
      height: '100vh'
    }

    return (
      <Map google={this.props.google} style={style}>
        {this.state.markers.map(marker => {
          return <Marker title={marker.title} label={marker.label} position={marker.position} />
        })}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAPv7CZEnHS4ZJeuUA2x5Ls6YvX24D4WrI'
})(Container)