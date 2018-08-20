import React from 'react'
import Comments from '../Comments/Comments'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import StarRating from './StarRating'
import { getLocation, editLocation } from '../../actions/locations'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1f1e1e'
  }
}

class Location extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: this.props.location,
      lat: this.props.location.lat,
      lng: this.props.location.lng,
      title: this.props.location.title,
      info: this.props.location.info,
      description: this.props.location.description,
      modalIsOpen: false,
      rating: 3
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.submitLocation = this.submitLocation.bind(this)
  }

  componentDidMount() {
    this.loadLocation(this.state.location)
  }

  loadLocation(location) {
    const id = this.props.match.params.id || location.id
    this.props.getLocation(id)
      .then(location => {
        this.setState({
          location: location
        })
      })
  }

  openModal() {
    this.setState({
      location: this.props.location,
      lat: this.props.lat,
      modalIsOpen: true
    })
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    })
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  submitLocation() {
    let lat, lng, title, info, description
    let id = this.state.location.id
    if (this.state.lat === undefined) {
      lat = this.state.location.lat
    } else { lat = this.state.lat }
    if (this.state.lng === undefined) {
      lng = this.state.location.lng
    } else { lng = this.state.lng }
    if (this.state.title === undefined) {
      title = this.state.location.title
    } else { title = this.state.title }
    if (this.state.info !== undefined) {
      info = this.state.info
    } else { info = this.state.location.info }
    if (this.state.description === undefined) {
      description = this.state.location.description
    } else { description = this.state.description }


    const updatedLocation = {
      id: id,
      lat: lat,
      lng: lng,
      title: title,
      info: info,
      description: description
    }
    this.props.editLocation(updatedLocation)
      .then(location => {
        this.loadLocation(location)
      })
      .then(this.closeModal) 
  }

  render() {
    const id = this.props.match.params.id
    return (
      <div className='location row'>
        <div className='col-8'>
          <img src={this.props.location.url} alt={this.props.location.title} />
        </div>
        <div className='col-4 locationRight'>
          <div className='locationText'>
            <h1>{this.props.location.title}</h1>
            <button className='comment-button' onClick={this.openModal}>Edit</button>
            <StarRating id={id} />
            <p className='location-content'>
              {this.props.location.info}
            </p>
            <p className='location-content'>
              {this.props.location.description}
            </p>
            <Comments id={this.props.match.params.id} />
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='Edit location'
          ariaHideApp={false}
        >
          <div className='editLocation'>
            {this.props.location &&
              <form>
                <fieldset className>
                  <h1>Edit Location</h1>
                  <div className='row'>
                    <div className='col-6'>
                      <p name='lat'>Latitude: {this.props.location.lat}</p>
                    </div>
                    <div className='col-6'>
                      <p name='lng'>Longitude: {this.props.location.lng} </p>
                    </div>
                  </div>
                  <label htmlFor='title'>Place name: </label><br />
                  <input type='text' name='title' defaultValue={this.props.location.title} id='name' onChange={this.handleChange} /><br />
                  <label htmlFor='info'>Title: </label><br />
                  <input type='text' name='info' defaultValue={this.props.location.info} id='title' onChange={this.handleChange} /><br />
                  <label htmlFor='description'>Description: </label><br />
                  <textarea rows="4" cols="100" name='description' defaultValue={this.props.location.description} id='description' onChange={this.handleChange}></textarea><br />
                  <button type='button' className='button' onClick={this.submitLocation}>Submit</button>
                  <button type='button' className='button' onClick={this.closeModal}>Cancel</button>
                </fieldset>
              </form>}
          </div>
        </Modal>
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
    },
    editLocation: (location) => {
      return dispatch(editLocation(location))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)