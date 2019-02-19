import React from 'react'
import Photos from './Photos'

class AddPhoto extends React.Component {
  constructor(){
    super()
    this.state = {
      showPhotos: false,
      location: 'Auckland'
    }
  }

  findPhotos(){
    this.setState({showPhotos: true})
  }

  render() {
    return(
      <div className='addPhotos'>
        <label>Enter placename to find photos</label>
        <input type='text' /><br/>
        {/* <button onClick={this.findPhotos}>Find photos</button>
        { this.state.showResults ? <Photos location={this.state.location} /> : null } */}
      </div>
    )
  }

}

export default AddPhoto