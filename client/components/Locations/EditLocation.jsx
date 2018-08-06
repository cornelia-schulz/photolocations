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
      <div>
      {this.state.location && 
      <form>
        <fieldset className='editLocation'>
          <h2>Edit location</h2>
          <label htmlFor='lat'>Latitude: </label>
          <input type='text' name='lat' value={this.state.location.lat} /><br />
          <label htmlFor='lng'>Longitude: </label>
          <input type='text' name='lat' value={this.state.location.lng} /><br />
          <label htmlFor='name'>Place name: </label>
          <input type='text' name='name' value={this.state.location.title} id='name' onChange={this.handleChange} /><br />
          <label htmlFor='title'>Title: </label>
          <input type='text' name='title' value={this.state.location.info} id='title' onChange={this.handleChange} /><br />
          <label htmlFor='description'>Description: </label>
          <input type='description' name='description' value={this.state.location.description} id='description' onChange={this.handleChange} /><br />
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