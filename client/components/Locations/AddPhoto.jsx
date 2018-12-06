import React from 'react'

class AddPhoto extends React.Component {
  constructor(){
    super()
    this.state = {
      pictures: []
    }
  }

  componentDidMount() {
    const apiKey = flickrApiKey
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+apiKey+'&tags=wellington&per_page=10&page=1&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      console.log(JSON.stringify(j));
      let picArray = j.photos.photo.map((pic) => {
        
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          <img alt="dogs" src={srcPath}></img>
        )
      })
      this.setState({pictures: picArray});
    }.bind(this))
  }

  render() {
    return(
      <div className='addPhoto'>
        {
            this.state.pictures && this.state.pictures.map((pic) => {
              console.log(pic.props)
              return(
              <img alt={pic.props.alt} src={pic.props.src} width='100px'/>
              )
            })
          }
      </div>
    )
  }

}

export default AddPhoto