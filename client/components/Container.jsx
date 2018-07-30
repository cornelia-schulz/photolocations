import React from 'react'
import Marker from './Marker'
import {GoogleApiWrapper} from 'google-maps-react'
import Map from './Map'
import InfoWindow from './InfoWindow'
import {getAllLocations} from '../actions/locations'
import config from '../../config.json'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import {BrowserRouter, Link, Redirect } from 'react-router-dom'

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
      redirectId : null
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onMapClicked = this.onMapClicked.bind(this)
    this.onMapRightClicked = this.onMapRightClicked.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onMoreInfo = this.onMoreInfo.bind(this)
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
    // e.preventDefault()
    console.log('here' + this.state.selectedPlace);
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
              <p> <button type='button' className='button'>Read more</button>
              


               {/* to={`/location/${this.state.selectedPlace.id}`}>here</Link> */}
               </p>
              {/* <p>Read more <a href={`/location/${this.state.selectedPlace.id}`}>here</a></p> */}
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
              <fieldset>
                <h4>Add new location</h4>
                {this.props.newLocation && <p>
                  Latitude: {this.props.newLocation.lat}<br />
                  Longitude: {this.props.newLocation.lng}</p>}
                  <label htmlFor='name'>Place name: </label>
                  <input type='text' name='name' id='name' /><br />
                  <label htmlFor='title'>Title: </label>
                  <input type='text' title='title' id='title' /><br />
                  <label htmlFor='description'>Description: </label>
                  <input type='description' name='description' id='description' /><br />
                  <button type='button' className='button' onClick={this.closeModal}>Submit</button>
                  <button type='button' className='button' onClick={this.closeModal}>Cancel</button>
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
    }
  }
}

const WrappedContainer =  GoogleApiWrapper({
  apiKey: `${config.GOOGLE_API_KEY}`
})(Container)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedContainer)