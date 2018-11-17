import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { connect } from 'react-redux'
import { getAllRatingsForLocation, getAllUserRatingsForLocation } from '../../actions/ratings'
import { withNamespaces } from 'react-i18next'
import i18n from 'i18next'

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
  }

  componentDidMount() {
    const id = this.props.id
    this.getAvgRating(id)
  }

  getAvgRating(id){
    const user = '1'
    this.props.getAllRatingsForLocation(id, user)
      .then(rating => {
        this.setState({
          avgRating: rating
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
    let {userRating, ratings} = this.props
    let rating = Math.round(ratings.rating)
    let usersRating = Math.round(userRating.rating)
    let { t, i18n } = this.props
    return (
     <div>
      {this.state.average==false && <StarRatingComponent
        name='userRating'
        editing={true}
        starCount={5}
        value={usersRating}
        onStarClick={this.onStarClick}
      />}
      {this.state.average && <StarRatingComponent
        name='avgRating'
        editing={false}
        starCount={5}
        value={rating}
        onStarClick={this.onStarClick}
      />}
      <p>
        <button className='rating-button' onClick={()=>this.swapRating(true)}>{t('starrating.avgrating')}</button> | <button className='rating-button' onClick={()=>this.swapRating(false)}>{t('starrating.rating')}</button>
      </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ratings: state.receiveLocationRatings,
    userRating: state.receiveUserRatingsForLocation
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllRatingsForLocation: (id, user) => {
      return dispatch(getAllRatingsForLocation(id, user))
    }
  }
}

export default withNamespaces('strings')(connect(mapStateToProps, mapDispatchToProps)(StarRating))