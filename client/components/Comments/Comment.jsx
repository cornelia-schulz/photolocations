import React from 'react'
import EditComment from './EditComment'
import {delComment} from '../../actions/comments'
import { connect } from 'react-redux'

export class Comment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isHidden: false,
      editIsHidden: true,
      error: null
    }
    this.deleteComment = this.deleteComment.bind(this)
    this.toggleHidden = this.toggleHidden.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


toggleHidden () {
  this.setState({
    isHidden: !this.state.isHidden,
    editIsHidden: !this.state.editIsHidden
  })
}

handleChange () {
  this.setState({
    isHidden: true
  })
}

deleteComment() {
  this.setState({ error: null })
  const id = this.props.id
  this.props.delComment(id)
    .then(() => {
      this.props.onChange()
    })
    .catch(err => this.setState({error: err.message}))
}

render() {
  return (
    <div className="comment">
      {!this.state.isHidden && <div className="commentInput">
        {this.props.comment}
      </div>}
      {!this.state.isHidden && <div className="commentButtons">
        <button className='comment-button' id="updateButton" onClick={this.toggleHidden}>Update</button>
        <button className='comment-button' id="deleteButton" onClick={this.deleteComment}>Delete</button>
      </div>}
      {!this.state.editIsHidden && <EditComment comment={this.props.comment} id={this.props.id} onChange={this.handleChange} />}
    </div>
  )
}
}

function mapDispatchToProps(dispatch) {
  return {
    delComment: (id) => {
      return dispatch(delComment(id))
    }
  }
}



export default connect(null, mapDispatchToProps)(Comment)