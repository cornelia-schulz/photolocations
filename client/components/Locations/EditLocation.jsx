import React from 'react'
import {connect} from 'react-redux'
import {getLocation, editLocation} from '../../actions/locations'

class EditLocation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      location: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getLocation(id)
      .then(() => {
        this.setState({location:this.props.location})
      })
  }

  handleChange() {

  }

  submitLocation() {

    this.props.editLocation(location)
  }

  render() {
    return (
      <div className='editLocation'>
      {this.state.location && 
      <form>
        <fieldset className>
          <h1>Edit Location</h1>
          <label htmlFor='lat'>Latitude: </label><br />
          <input type='text' name='lat' value={this.state.location.lat} /><br />
          <label htmlFor='lng'>Longitude: </label><br />
          <input type='text' name='lat' value={this.state.location.lng} /><br />
          <label htmlFor='name'>Place name: </label><br />
          <input type='text' name='name' value={this.state.location.title} id='name' onChange={this.handleChange} /><br />
          <label htmlFor='title'>Title: </label><br />
          <input type='text' name='title' value={this.state.location.info} id='title' onChange={this.handleChange} /><br />
          <label htmlFor='description'>Description: </label><br />
          <textarea rows="4" cols="100" name='description' value={this.state.location.description} id='description' onChange={this.handleChange}></textarea>
          <button type='button' className='button'>Cancel</button>
          <button type='button' className='button' onClick={this.submitLocation}>Submit</button>
        </fieldset>
      </form>}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditLocation)