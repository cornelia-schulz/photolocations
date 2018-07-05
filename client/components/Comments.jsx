import React from 'react'
import Comment from './Comment'

import { getAllComments, addComment } from '../apiClient'

class Comments extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      comments: [],
      comment: '',
      id: null,
      isHidden: true
    }
  }

  componentDidMount () {
    this.reloadComments()
  }

  reloadComments () {
    getAllComments(this.props.id)
    .then(comments => {
      this.setState({comments})
    })
  }

  addNewComment(e){
    e.preventDefault()
    this.setState({error: null})
    const newError = {task: this.state.comment}
    addComment(comment)
      .then(() => {
        this.setState({comment: ''})
      })
      .then(() => {
        this.reloadComments()
      })
      .catch(err => this.setState({error: err.message}))
  }

  updateComment(e) {
    this.setState({
      comment: event.target.value.substr(0, 300)
    })
  }


  render() {
    return (
      <div className="comments">
        <h2>Comments</h2>
        <form className="addCommentForm">
          <textarea rows="4" cols="100" value={this.state.comment} onChange={this.updateComment}></textarea><br />
          <input type="submit" id="addCommentButton" value = "Add comment" />
        </form>
        <ul>
          {this.state.comments.map(comment => {
            return <li key={comment.id}>
              <Comment comment={comment.comment} onChange={this.reloadComments.bind(this)} />
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default Comments