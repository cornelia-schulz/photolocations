import React from 'react';
import ReactDOM from 'react-dom';
const PropTypes = require ('prop-types')

const evtNames = ['onReady', 'onClick', 'onDragend'];
class Map extends React.Component {
  
  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.google !== this.props.google){
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  componentDidMount(){
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((pos) => {
              const coords = pos.coords;
              this.setState({
                  currentLocation: {
                      lat: coords.latitude,
                      lng: coords.longitude
                  }
              })
          })
      }
  }
  this.loadMap();
  }

  loadMap(){
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {initialCenter, zoom} = this.props;
      const {lat, lng} = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);


      evtNames.forEach(e => {
        this.map.addListener(e, this.handleEvent(e));
      });
      maps.event.trigger(this.map, 'onReady');

      this.forceUpdate()
    }
  }

  recenterMap() {
    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng)
        map.panTo(center)
    }
  }

  handleEvent(evtName) {
    let timeout;
    const handlerName = evtName;

    return (e) => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        if (this.props[handlerName]) {
          this.props[handlerName](this.props, this.map, e);
        }
      }, 0);
    }
  }

  renderChildren(){
    const {children} = this.props;
    // if there are no children still display the map
    if (!children || children.some(a=> !a)) {
      return;
    }

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    })

  }

  render() {
    return (
      <div id="map" ref='map'>
        Loading map... 
        {this.renderChildren()}
      </div>
    )
  }
}

Map.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object,
  centerAroundCurrentLocation: PropTypes.bool,
  onMove: PropTypes.func
}
Map.defaultProps = {
  zoom: 14,
  // Auckland, by default
  initialCenter: {
    lat: -36.855,
    lng: 174.77
  },
  centerAroundCurrentLocation: false,
  onMove: function(){}
}


export default Map