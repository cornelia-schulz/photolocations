import React from 'react'
import Comments from '../Comments/Comments'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import StarRating from './StarRating'
import EditLocation from './EditLocation'
import { getLocation, editLocation } from '../../actions/locations'
import { getUserRatingsForLocation } from '../../actions/ratings'

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
      modalIsOpen: false,
      userRatings: this.props.userRatings
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    const user = 2
    this.loadLocation(this.state.location)
    this.props.getUserRatingsForLocation(id, user)
  }

  loadLocation(locationid) {
    const id = this.props.match.params.id || locationid
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
      userRatings: this.props.userRatings,
      modalIsOpen: true
    })
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    })
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
            {this.props.location && <EditLocation location={this.props.location} userRatings={this.props.userRatings} onClick={this.closeModal} id={id} loadLocation={()=>this.loadLocation(id)} />}
          </div>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    location: state.receiveLocation,
    userRatings: state.receiveUserRatingsForLocation
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getLocation: (id) => {
      return dispatch(getLocation(id))
    },
    editLocation: (location) => {
      return dispatch(editLocation(location))
    },
    getUserRatingsForLocation: (id, user) => {
      return dispatch(getUserRatingsForLocation(id, user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)