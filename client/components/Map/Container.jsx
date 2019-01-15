import React from 'react'
import Marker from './Marker'
import {GoogleApiWrapper} from 'google-maps-react'
import Map from './Map'
import InfoWindow from './InfoWindow'
import {getAllLocations, addLocation} from '../../actions/locations'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import {BrowserRouter, Link, Redirect} from 'react-router-dom'
import i18n from 'i18next'
import {withNamespaces} from 'react-i18next'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1f1e1e',
  },
}

class Container extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      redirectId: null,
      name: '',
      title: '',
      description: '',
      error: null,
    }
    this.onMarkerClick = this.onMarkerClick.bind (this)
    this.onMapClicked = this.onMapClicked.bind (this)
    this.onMapRightClicked = this.onMapRightClicked.bind (this)
    this.openModal = this.openModal.bind (this)
    this.closeModal = this.closeModal.bind (this)
    this.onMoreInfo = this.onMoreInfo.bind (this)
    this.submitNewLocation = this.submitNewLocation.bind (this)
    this.handleChange = this.handleChange.bind (this)
    this.reloadLocations = this.reloadLocations.bind (this)
  }

  componentDidMount () {
    const language = i18n.languages[0]
    this.reloadLocations (language)
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.language !== this.props.language) {
      this.reloadLocations(this.props.language)
    }
  }

  reloadLocations(language) {
    this.props.getAllLocations(language)
  }

  openModal () {
    this.setState ({
      modalIsOpen: true,
    })
  }

  closeModal () {
    this.setState ({
      modalIsOpen: false,
    })
  }

  onMarkerClick (props, marker, e) {
    this.setState ({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
    //map.setCenter(marker.getPosition())
  }

  onMapClicked (props) {
    if (this.state.showingInfoWindow) {
      this.setState ({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  onMoreInfo () {
    this.setState ({redirectId: this.state.selectedPlace.id})
  }

  onMapRightClicked () {
    this.openModal ()
  }

  redirect () {
    if (this.state.redirectId) {
      return <div>hi</div>
    }
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState ({
      [name]: value,
    })
  }

  submitNewLocation (e) {
    const location = {
      lat: this.props.newLocation.lat,
      lng: this.props.newLocation.lng,
      name: this.state.name,
      title: this.state.title,
      description: this.state.description,
      language: i18n.languages[0]
    }
    this.props
      .addLocation (location)
      .then (() => {
        this.reloadLocations ()
      })
      .catch (err => this.setState ({error: err.message}))
    this.closeModal ()
  }

  render () {
    const style = {
      width: '100vh',
      height: '100vh',
    }
    let {ratings, userRating} = this.props
    if (this.state.redirectId) {
      return <Redirect to={`/location/${this.state.redirectId}`} />
    }
    let {t, i18n} = this.props
    return (
      <BrowserRouter>
        <Map
          google={this.props.google}
          style={style}
          click={this.onMapClicked}
          rightclick={this.onMapRightClicked}
          maplongclick={this.onMapRightClicked}
        >
          {this.props.locations.map (marker => {
            return (
              <Marker
                key={marker.id}
                click={this.onMarkerClick}
                info={marker.info}
                title={marker.title}
                label={marker.label}
                id={marker.id}
                description={marker.description}
                position={{lat: marker.lat, lng: marker.lng}}
                url={marker.url}
                // rating={marker.rating}
              />
            )
          })}
          <InfoWindow
            {...this.props}
            defaultOptions={{disableAutoPan: false}}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            selectedPlace={this.state.selectedPlace}
            stars={5}
            onClick={this.onMoreInfo}
            button={t ('infoWindow.read')}
          >
            <div className='infoWindow'>
              <h2>{this.state.selectedPlace.title}</h2>
              <img src={this.state.selectedPlace.url} />
              {/* {this.state.selectedPlace.rating < 1 && <p className='stars'><i className='fa fa-star-o'></i><i className='fa fa-star-o'></i><i className='fa fa-star-o'></i><i className='fa fa-star-o'></i><i className='fa fa-star-o'></i></p>}
              {this.state.selectedPlace.rating > 1 && this.state.selectedPlace.rating < 2 && <p className='stars'><i className='fa fa-star' aria-hidden='true'></i><i className='fa fa-star-o'></i><i className='fa fa-star-o'></i><i className='fa fa-star-o'></i><i className='fa fa-star-o'></i></p>}
              {this.state.selectedPlace.rating > 2 && this.state.selectedPlace.rating < 3 && <p className='stars'><i className='fa fa-star' aria-hidden='true'></i><i className='fa fa-star' aria-hidden='true'></i><i className='fa fa-star-o'></i><i className='fa fa-star-o'></i><i className='fa fa-star-o'></i><i className='fa fa-star-o'></i></p> }
              {this.state.selectedPlace.rating > 3 && this.state.selectedPlace.rating < 4 && <p className='stars'><i className='fa fa-star' aria-hidden='true'></i><i className='fa fa-star' aria-hidden='true'></i><i className='fa fa-star' aria-hidden='true'></i><i className='fa fa-star-o'></i><i className='fa fa-star-o'></i></p> }
              {this.state.selectedPlace.rating > 4 && this.state.selectedPlace.rating < 5 && <p className='stars'><i className='fa fa-star' aria-hidden='true'></i><i className='fa fa-star' aria-hidden='true'></i><i className='fa fa-star' aria-hidden='true'></i><i className='fa fa-star' aria-hidden='true'></i><i className='fa fa-star-o'></i></p> }
              {this.state.selectedPlace.rating == 5 && <p className='stars'><i className='fa fa-star' aria-hidden='true'></i><i className='fa fa-star' aria-hidden='true'></i><i className='fa fa-star' aria-hidden='true'></i><i className='fa fa-star' aria-hidden='true'></i><i className='fa fa-star' aria-hidden='true'></i></p> } */}
              <p>{this.state.selectedPlace.info}</p>
              <p>
                {this.state.selectedPlace.description}
              </p>
            </div>
          </InfoWindow>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel={t ('addNewLocation.add_header')}
            ariaHideApp={false}
          >
            <form>
              <fieldset className='addNewLocation'>
                <h2>{t ('addNewLocation.add_header')}</h2>
                {this.props.newLocation &&
                  <p>
                    {t ('addNewLocation.latitude')}
                    {' '}
                    <span className='right'>{this.props.newLocation.lat}</span>
                    <br />
                    {t ('addNewLocation.longitude')}
                    {' '}
                    <span className='right'>{this.props.newLocation.lng}</span>
                  </p>}
                <label htmlFor='name'>{t ('addNewLocation.place')} </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor='title'>{t ('addNewLocation.title')} </label>
                <input
                  type='text'
                  name='title'
                  id='title'
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor='description'>
                  {t ('addNewLocation.description')}{' '}
                </label>
                <input
                  type='description'
                  name='description'
                  id='description'
                  onChange={this.handleChange}
                />
                <br />
                <button
                  type='button'
                  className='button'
                  onClick={this.submitNewLocation}
                >
                  {t ('addNewLocation.submit')}
                </button>
                <button
                  type='button'
                  className='button'
                  onClick={this.closeModal}
                >
                  {t ('addNewLocation.cancel')}
                </button>
              </fieldset>
            </form>
          </Modal>
        </Map>
      </BrowserRouter>
    )
  }
}

function mapStateToProps (state) {
  return {
    locations: state.receiveLocations,
    newLocation: state.setNewLocation,
    language: state.receiveLanguage,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getAllLocations: (language) => {
      return dispatch (getAllLocations (language))
    },
    addLocation: location => {
      return dispatch (addLocation (location))
    },
  }
}
const apiKey = googleApiKey

const WrappedContainer = GoogleApiWrapper ({
  apiKey: `${apiKey}`,
}) (Container)

export default withNamespaces ('strings') (
  connect (mapStateToProps, mapDispatchToProps) (WrappedContainer)
)
