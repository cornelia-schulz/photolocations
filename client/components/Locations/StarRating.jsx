import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { Link } from 'react-router-dom'

class StarRating extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userRating: 3,
      avgRating: 4,
      average: true
    }
    this.swapRating = this.swapRating.bind(this)
    this.onStarClick = this.onStarClick.bind(this)
  }

  swapRating(rating){
    this.setState({
      average: rating
    })
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({
      userRating: nextValue
    })
  }

  render() {
    let {userRating, avgRating} = this.state
    return (
      <div>
      {this.state.average==false && <StarRatingComponent
        name='userRating'
        editing={true}
        starCount={5}
        value={userRating}
        onStarClick={this.onStarClick}
      />}
      {this.state.average && <StarRatingComponent
        name='avgRating'
        editing={false}
        starCount={5}
        value={avgRating}
        onStarClick={this.onStarClick}
      />}
      <p>
        <button className='rating-button' onClick={()=>this.swapRating(true)}>Average rating</button> | 
        <button className='rating-button' onClick={()=>this.swapRating(false)}>Your rating</button>
      </p>
      </div>
    )
  }
}

export default StarRating