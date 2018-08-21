import React from 'react'
import { connect } from 'react-redux'
import { editLocation } from '../../actions/locations'
import StarRatingComponent from 'react-star-rating-component'

class EditLocation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: this.props.location,
      lat: this.props.location.lat,
      lng: this.props.location.lng,
      title: this.props.location.title,
      info: this.props.location.info,
      description: this.props.location.description,
      id: this.props.id,
      carparking: this.props.userRatings.carparking,
      convenience: this.props.userRatings.convenience,
      views: this.props.userRatings.views
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitLocation = this.submitLocation.bind(this)
    this.onStarClick = this.onStarClick.bind(this)
  }

  componentDidMount() {
    this.setState({
      carparking: this.props.userRatings.carparking,
      convenience: this.props.userRatings.convenience,
      views: this.props.userRatings.views
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
    let carparking = this.state.carparking
    let convenience = this.state.convenience
    let views = this.state.views
    let user = 2

    const updatedLocation = {
      id: id,
      lat: lat,
      lng: lng,
      title: title,
      info: info,
      description: description,
      carparking: carparking,
      convenience: convenience,
      views: views,
      user: user
    }
    this.props.editLocation(updatedLocation)
      .then(() => {
        this.props.loadLocation(this.props.id)
      })
      .then(this.props.onClick) 
  }

  onStarClick(nextValue, prevValue, name) {
    console.log(name)
    this.setState({
      [name]: nextValue
    })
  }

  render() {
    return (
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
          <textarea rows='4' cols='100' name='description' defaultValue={this.props.location.description} id='description' onChange={this.handleChange}></textarea><br />
          <div className='row update-star-rating'>
            <div className='col-3'>
            Carparking
              <StarRatingComponent 
                name='carparking'
                editing={true}
                starCount={5}
                value={this.state.carparking}
                onStarClick={this.onStarClick}
              />
            </div>
            <div className='col-3'>
                Convenience
                <StarRatingComponent 
                name='convenience'
                editing={true}
                starCount={5}
                value={this.state.convenience}
                onStarClick={this.onStarClick}
              />
            </div>
            <div className='col-3'>
                Views <br/>
                <StarRatingComponent 
                name='views'
                editing={true}
                starCount={5}
                value={this.state.views}
                onStarClick={this.onStarClick}
              />
            </div>
          </div>
          
          <button type='button' className='button' onClick={this.submitLocation}>Submit</button>
          <button type='button' className='button' onClick={this.props.onClick}>Cancel</button>
        </fieldset>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editLocation: (location) => {
      return dispatch(editLocation(location))
    }
  }
}

export default connect(null, mapDispatchToProps)(EditLocation)