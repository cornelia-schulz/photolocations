import React from 'react'
import EditComment from './EditComment'
import delComment from '../apiClient'
import { connect } from 'react-redux'

class Comment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isHidden: true
    }
  }


toggleHidden () {
  this.setState({
    isHidden: !this.state.isHidden
  })
}

handleChange () {
  this.setState({
    isHidden: true
  })
  this.props.onChange()
}

deleteComment(comment) {
  this.setState({ error: null })
  this.deleteComment(comment.id)
  .then(this.props.onChange)
}

render() {
  return (
    <div className="comment">
      <div className="commentInput">
        {this.props.comment}
      </div>
      <div className="commentButtons">
        <button id="editCommentButton" onClick={this.toggleHidden.bind(this)}>Edit</button>
        <button id="deleteCommentButton" onClick={this.deleteComment.bind(this, this.props.comment)} onChange={this.onChange}>Delete</button>
      </div>
      {!this.state.isHidden && <EditComment comment={this.props.comment} onChange={this.handleChange.bind(this)} />}
    </div>
  )
}

}

export default Comment