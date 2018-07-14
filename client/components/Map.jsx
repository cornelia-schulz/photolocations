import React from 'react'
import ReactDOM from 'react-dom'
const PropTypes = require('prop-types')
import { connect } from 'react-redux'
const evtNames = ['ready', 'click', 'dragend']
class Map extends React.Component {

  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
    this.onPlaceSearch = this.onPlaceSearch.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
    if (prevProps.searchString !== this.props.searchString) {
      const request = {
        query: this.props.searchString,
        fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry']
      }
      const service = new google.maps.places.PlacesService(this.map);
      service.findPlaceFromQuery(request, this.onPlaceSearch);
    }
  }

  onPlaceSearch(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        let place = results[i];
        console.log(place);
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        this.setState ({
          currentLocation: {lat: lat, lng: lng}
        })
      }
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
        const { google } = this.props
        const maps = google.maps

        const mapRef = this.refs.map
        const node = ReactDOM.findDOMNode(mapRef)

        let { initialCenter, zoom } = this.props
        const { lat, lng } = this.state.currentLocation
        const center = new maps.LatLng(lat, lng)
        const mapConfig = Object.assign({}, {
          center: center,
          zoom: zoom
        })
        this.map = new maps.Map(node, mapConfig)


        evtNames.forEach(e => {
          this.map.addListener(e, this.handleEvent(e))
        })
        maps.event.trigger(this.map, 'ready')

        this.forceUpdate()
      }
    }

    recenterMap() {
      const map = this.map
      const curr = this.state.currentLocation

      const google = this.props.google
      const maps = google.maps

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
            this.props[handlerName](this.props, this.map, e)
          }
        }, 0);
      }
    }

    renderChildren(){
      const { children } = this.props
      // if there are no children still display the map
      if (!children || children.some(a => !a)) {
        return
      }

      return React.Children.map(children, c => {
        return React.cloneElement(c, {
          map: this.map,
          google: this.props.google,
          mapCenter: this.state.currentLocation
        })
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
    zoom: 12,
    // Auckland, by default
    initialCenter: {
      lat: -36.855,
      lng: 174.77
    },
    centerAroundCurrentLocation: true,
    onMove: function () { }
  }


  export default Map