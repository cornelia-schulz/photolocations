import React from 'react'
import EditComment from './EditComment'
import {delComment} from '../actions/comments'
import { connect } from 'react-redux'

export class Comment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isHidden: true
    }
    this.deleteComment = this.deleteComment.bind(this)
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

deleteComment() {
  const id = this.props.id
  this.setState({ error: null })
  this.props.delComment(id)
  .then(this.props.onChange)
}

render() {
  return (
    <div className="comment">
      <div className="commentInput">
        {this.props.comment}
      </div>
      <div className="commentButtons">
        <button id="editCommentButton" onClick={this.toggleHidden.bind(this)}>Update</button>
        <button id="deleteCommentButton" onClick={this.deleteComment.bind(this, this.props.comment)} onChange={this.onChange}>Delete</button>
      </div>
      {!this.state.isHidden && <EditComment comment={this.props.comment} id={this.props.id} onChange={this.handleChange.bind(this)} />}
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