import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { connect } from 'react-redux'
import { getAllRatingsForLocation, getAllUserRatingsForLocation } from '../../actions/ratings'

class StarRating extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userRating: 0,
      avgRating: 0,
      average: true
    }
    this.swapRating = this.swapRating.bind(this)
    this.onStarClick = this.onStarClick.bind(this)
    this.getAvgRating = this.getAvgRating.bind(this)
    this.getUserAvgRating = this.getUserAvgRating.bind(this)
  }

  componentDidMount() {
    this.getAvgRating()
    this.getUserAvgRating()
  }

  getAvgRating(){
    const id = this.props.id
    this.props.getAllRatingsForLocation(id)
      .then(ratings => {
        this.setState({
          avgRating: ratings
        })
    })
  }

  getUserAvgRating() {
    const id  = this.props.id
    const user = '1'
    this.props.getAllUserRatingsForLocation(id, user)
      .then(ratings => {
        this.setState({
          userRating: ratings
        })
      })
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
      {this.state.average==false  && this.props.userRating && <StarRatingComponent
        name='userRating'
        editing={true}
        starCount={5}
        value={this.props.userRating}
        onStarClick={this.onStarClick}
      />}
      {this.state.average && this.props.ratings && <StarRatingComponent
        name='avgRating'
        editing={false}
        starCount={5}
        value={this.props.ratings}
        onStarClick={this.onStarClick}
      />}
      <p>
        <button className='rating-button' onClick={()=>this.swapRating(true)}>Average rating</button> | <button className='rating-button' onClick={()=>this.swapRating(false)}>Your rating</button>
      </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ratings: state.receiveLocationRatings,
    userRating: state.receiveUserLocationRatings
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllRatingsForLocation: (id) => {
      return dispatch(getAllRatingsForLocation(id))
    },
    getAllUserRatingsForLocation: (location, user) => {
      return dispatch(getAllUserRatingsForLocation(location, user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StarRating)