import React from 'react'
import Marker from './Marker'
import {GoogleApiWrapper} from 'google-maps-react'
import Map from './Map'
import InfoWindow from './InfoWindow'
import {getAllLocations, addLocation} from '../actions/locations'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import {BrowserRouter, Link, Redirect } from 'react-router-dom'

const apiKey = process.env.GOOGLE_API_KEY

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
      selectedPlace: {},
      redirectId : null,
      name: '',
      title: '',
      description: ''
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onMapClicked = this.onMapClicked.bind(this)
    this.onMapRightClicked = this.onMapRightClicked.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onMoreInfo = this.onMoreInfo.bind(this)
    this.submitNewLocation = this.submitNewLocation.bind(this)
    this.handleChange = this.handleChange.bind(this)
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

  onMoreInfo(){
    this.setState({redirectId : this.state.selectedPlace.id})
  }

  onMapRightClicked() {
    this.openModal()
  }

  redirect(){
    if(this.state.redirectId){
      return <div>hi</div>
    }
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  submitNewLocation(e){
    const location = {
      lat: this.props.newLocation.lat,
      lng: this.props.newLocation.lng,
      name: this.state.name,
      title: this.state.title,
      description: this.state.description
    }
    this.props.addLocation(location)
    this.closeModal()
    this.setState = ({
      name: '',
      title: '',
      description: ''
    })
  }

  render() {
    const style = {
      width: '100vh',
      height: '100vh'
    }
    if(this.state.redirectId){
      return <Redirect to={`/location/${this.state.redirectId}`} />
    } 
    return (
      <BrowserRouter>


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
            visible={this.state.showingInfoWindow}
            selectedPlace={this.state.selectedPlace}
            onClick={this.onMoreInfo}>
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
            <form>
              <fieldset className='addNewLocation'>
                <h2>Add new location</h2>
                {this.props.newLocation && <p>
                  Latitude: <span className='right'>{this.props.newLocation.lat}</span><br />
                  Longitude: <span className='right'>{this.props.newLocation.lng}</span></p>}
                  <label htmlFor='name'>Place name: </label>
                  <input type='text' name='name' id='name' onChange={this.handleChange} /><br />
                  <label htmlFor='title'>Title: </label>
                  <input type='text' name='title' id='title' onChange={this.handleChange} /><br />
                  <label htmlFor='description'>Description: </label>
                  <input type='description' name='description' id='description' onChange={this.handleChange} /><br />
                  <button type='button' className='button' onClick={this.closeModal}>Cancel</button>
                  <button type='button' className='button' onClick={this.submitNewLocation}>Submit</button>
                </fieldset>
            </form>
            
          </Modal>
        </Map>
        </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    locations: state.receiveLocations,
    newLocation: state.setNewLocation
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllLocations: () => {
      return dispatch(getAllLocations())
    },
    addLocation: (location) => {
      return dispatch(addLocation(location))
    }
  }
}

const WrappedContainer =  GoogleApiWrapper({
  apiKey: `${apiKey}`
})(Container)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedContainer)