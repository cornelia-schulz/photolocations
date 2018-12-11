import React from 'react'

class AddPhoto extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  render() {
    return(
      <div className='addPhotos'>
        <label>Enter placename to find photos</label>
        <input type='text' /><br/>
        <button>Find photos</button>
      </div>
    )
  }

}

export default AddPhoto