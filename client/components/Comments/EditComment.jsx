import React from 'react'
import { connect } from 'react-redux'
import { updateComment } from '../../actions/comments'
import i18n from 'i18next'
import { withNamespaces } from 'react-i18next'

class EditComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: this.props.comment,
      error: null
    }
    this.getComment = this.getComment.bind(this)
    this.editComment = this.editComment.bind(this)
  }

  getComment(e) {
    this.setState({
      comment: e.target.value.substr(0, 50)
    })
  }

  editComment() {
    this.setState({
      error: null
    })
    const comment = {
      comment: this.state.comment,
      id: this.props.id
    }
    this.props.updateComment(comment)
      .catch(err => this.setState({ error: err.message }))
  }

  render() {
    let { t, i18n } = this.props
    return (
      <form className='editComment' onSubmit={this.editComment} >
        <textarea id='editComment' rows='4' cols='100' value={this.state.comment} onChange={this.getComment}></textarea><br />
        <button className='button' id='cancelButton'>{t('editComment.cancel')}</button>
        <button className='button' id='button'>{t('editComment.submit')}</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateComment: (comment) => {
      return dispatch(updateComment(comment))
    }
  }
}

export default withNamespaces('strings')(connect(null, mapDispatchToProps)(EditComment))