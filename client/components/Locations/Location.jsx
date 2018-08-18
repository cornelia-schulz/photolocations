import React from 'react'
import {getLocation} from '../../actions/locations'
import Comments from '../Comments/Comments'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import {editLocation} from '../../actions/locations'

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
  constructor(props){
    super(props)
    this.state = {
      location: this.props.location
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.submitLocation = this.submitLocation.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getLocation(id)
      .then(location => {
        this.setState({location})
      })
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    })
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  submitLocation() {

    this.props.editLocation(location)
  }

  render() {
    return (
      <div className="location row">
      <div className="col-8">
        <img src={this.props.location.url} alt={this.props.location.title} />
        </div>
        <div className="col-4 locationRight">
          <div className="locationText">
            <h1>{this.props.location.title}</h1>
            <button className="comment-button" onClick={this.openModal}>Edit</button>
            <p>
              {this.props.location.info}
            </p>
            <p>
              {this.props.location.description}
            </p>
            <Comments id={this.props.match.params.id}/>
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
                  <label htmlFor='lat'>Latitude: </label><br />
                  <input type='text' name='lat' value={this.props.location.lat} onChange={this.handleChange} /><br />
                  <label htmlFor='lng'>Longitude: </label><br />
                  <input type='text' name='lat' value={this.props.location.lng} onChange={this.handleChange} /><br />
                  <label htmlFor='name'>Place name: </label><br />
                  <input type='text' name='name' value={this.props.location.title} id='name' onChange={this.handleChange} /><br />
                  <label htmlFor='title'>Title: </label><br />
                  <input type='text' name='title' value={this.props.location.info} id='title' onChange={this.handleChange} /><br />
                  <label htmlFor='description'>Description: </label><br />
                  <textarea rows="4" cols="100" name='description' value={this.props.location.description} id='description' onChange={this.handleChange}></textarea><br />
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