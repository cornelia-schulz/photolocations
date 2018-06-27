import React from 'react';
import Marker from './Marker';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from './Map';
import InfoWindow from './InfoWindow'

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      markers: [
        {
          id: 1,
          title: 'Westhaven',
          label: 'Westhaven',
          position: {
            lat: -36.839914,
            lng: 174.747697
          }
        },
        {
          id: 2,
          title: 'Okahu Bay Wharf',
          label: 'Okahu Bay',
          position: {
            lat: -36.845246,
            lng: 174.816951
          }
        },
        {
          id: 3,
          title: 'Little Shoal Bay',
          label: 'Little Shoal Bay',
          position: {
            lat: -36.816693,
            lng: 174.739157
          }
        },
        {
          id: 4,
          title: 'The Wharf',
          label: 'The Wharf',
          position: {
            lat: -36.826638,
            lng: 174.746667
          }
        },
        {
          id: 5,
          title: 'Viaduct Events Centre',
          label: 'Viaduct Events Centre',
          position: {
            lat: -36.841185,
            lng: 174.759520
          }
        },
        {
          id: 6,
          title: 'Cornwallis Wharf',
          label: 'Cornwallis Wharf',
          position: {
            lat: -37.011840,
            lng: 174.605286
          }
        },
        {
          id: 7,
          title: 'Bucklands Beach',
          label: 'Bucklands Beach',
          position: {
            lat: -36.862400,
            lng: 174.899559
          }
        },
        {
          id: 8,
          title: 'Magazine Bay',
          label: 'Magazine Bay',
          position: {
            lat: -36.883566,
            lng: 175.056192
          }
        },
        {
          id: 9,
          title: 'Piha',
          label: 'Piha',
          position: {
            lat: -36.954760,
            lng: 174.468187
          }
        },
        {
          id: 10,
          title: 'Hunua Falls',
          label: 'Hunua Falls',
          position: {
            lat: -37.068781,
            lng: 175.089827
          }
        }
      ]
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
  };

  onMarkerClick(props, marker, e){
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const style = {
      width: '100vh',
      height: '100vh'
    }

    return (
      <Map google={this.props.google} style={style} click={this.onMapClicked}>
        {this.state.markers.map(marker => {
          return <Marker key={marker.id} click={this.onMarkerClick} title={marker.title} label={marker.label} position={marker.position} />
        })}
        <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAPv7CZEnHS4ZJeuUA2x5Ls6YvX24D4WrI'
})(Container)