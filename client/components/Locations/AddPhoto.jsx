import React from 'react'
import Photos from './Photos'

class AddPhoto extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  findPhotos(){
    
  }

  render() {
    return(
      <div className='addPhotos'>
        <label>Enter placename to find photos</label>
        <input type='text' /><br/>
        <button>Find photos</button>
        <Photos location={this.state.location}/>
      </div>
    )
  }

}

export default AddPhoto