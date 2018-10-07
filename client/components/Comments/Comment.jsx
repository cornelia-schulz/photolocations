import React from 'react'
import EditComment from './EditComment'
import {delComment} from '../../actions/comments'
import { connect } from 'react-redux'
import i18n from 'i18next'
import { withNamespaces } from 'react-i18next'

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
  let date = new Date(`${this.props.date}`)
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDay()
  let publishDate = day + '/' + month + '/' + year
  let { t, i18n } = this.props
  return (
    <div className='comment'>
      {!this.state.isHidden && <div className="commentInput">
        <p className='comment-user'>{this.props.user} {t('comment.wrote')} {publishDate}:</p>
        <p className='comment-content'>{this.props.comment}</p>
      </div>}
      {!this.state.isHidden && <div className="commentButtons">
        <button className='comment-button' id="updateButton" onClick={this.toggleHidden}>{t('comment.update')}</button>
        <button className='comment-button' id="deleteButton" onClick={this.deleteComment}>{t('comment.delete')}</button>
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



export default withNamespaces('strings')(connect(null, mapDispatchToProps)(Comment))