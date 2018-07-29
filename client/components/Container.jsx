import React from 'react'
import Marker from './Marker'
import {GoogleApiWrapper} from 'google-maps-react'
import Map from './Map'
import InfoWindow from './InfoWindow'
import {getAllLocations} from '../actions/locations'
import config from '../../config.json'
import {connect} from 'react-redux'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onMapClicked = this.onMapClicked.bind(this)
    this.onMapRightClicked = this.onMapRightClicked.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    this.props.getAllLocations()
  }

  openModal () {
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal () {
    this.setState({
      modalIsOpen: false
    })
  }

  onMarkerClick(props, marker, e) {
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
  }

  onMapRightClicked(e) {
    console.log(e)
    this.openModal()
  }

  render() {
    const style = {
      width: '100vh',
      height: '100vh'
    }

    return (
        <Map google={this.props.google} style={style} click={this.onMapClicked} rightclick={this.onMapRightClicked}>
          {this.props.locations.map(marker => {
            return <Marker key={marker.id}
              click={this.onMarkerClick}
              info={marker.info}
              title={marker.title}
              label={marker.label}
              id={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              url={marker.url} />
          })}

          <InfoWindow {...this.props}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div className="infoWindow">
              <h2>{this.state.selectedPlace.title}</h2>
              <img src={this.state.selectedPlace.url} width="300px" />
              <img id="starRating" src="/images/stars.png" alt="star-rating" />
              <p>{this.state.selectedPlace.info}</p>
              <p>
                Lorem ipsum dolor amet enamel pin blue bottle
                 portland humblebrag XOXO. Godard pour-over knausgaard 
                 sustainable migas. Man bun organic pop-up, ethical gastropub 
                 hashtag 3 wolf moon ennui. Blue bottle truffaut la croix, 
                 narwhal tousled vexillologist hot chicken sustainable celiac four loko.
              </p>
              <p>Read more <a href={`/#/location/${this.state.selectedPlace.id}`}>here</a></p>
            </div>
          </InfoWindow>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='Add new location'
            ariaHideApp={false}
          >
            <h4>Add new location</h4>
            <p>here</p>
            <button type='button' className='button' onClick={this.closeModal}>Submit</button>
          </Modal>
        </Map>
    )
  }
}

function mapStateToProps(state) {
  return {
    locations: state.receiveLocations
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllLocations: () => {
      return dispatch(getAllLocations())
    }
  }
}

const WrappedContainer =  GoogleApiWrapper({
  apiKey: `${config.GOOGLE_API_KEY}`
})(Container)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedContainer)