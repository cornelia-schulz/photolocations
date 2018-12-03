import React from 'react'
import { connect } from 'react-redux'
import { sendMail } from '../actions/contact'
import ReactGA from 'react-ga'
import i18n from 'i18next'
import { withNamespaces } from 'react-i18next'

ReactGA.initialize('UA-124825499-1')
ReactGA.pageview(window.location.pathname + window.location.search)

export class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      email: null,
      message: null,
      language: this.props.language
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  componentDidMount() {
    i18n.changeLanguage(this.state.language)
  }

  handleSubmit(e) {

    e.preventDefault()
    const newMessage = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    this.props.sendMail(newMessage)
      .then((response) => {
        if (response === 'success') {
          this.resetForm()
        }
      })

  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  resetForm() {
    document.getElementById('contactForm').reset()
  }

  render() {
    let { t, i18n } = this.props
    return (
      <div className='contact'>
        <img src='/images/Muriwai.jpg' alt='Muriwai' />
        <div className='contactText'>
          <h1>{t('contact.contact_header')}</h1>
          {this.props.message && <span className='error'>{this.props.message}</span>}
          <form className='contactForm' id='contactForm' onSubmit={this.handleSubmit} method="POST">
            <label htmlFor='name'>{t('contact.name')}</label>
            <br />
            <input type='text' name='name' id='name' onChange={this.handleChange} />
            <br />
            <label htmlFor='email'>{t('contact.email')}</label><br />
            <input type='email' name='email' id='email' onChange={this.handleChange} /> <br />
            <label htmlFor='message'>{t('contact.message')}</label><br />
            <textarea rows='10' cols='50' name='message' id='message' onChange={this.handleChange}>
            </textarea>
            <br />
            <button className='button' type='submit' id='contactFormSubmit'>{t('contact.send')}</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendMail: (newMessage) => {
      return dispatch(sendMail(newMessage))
    }
  }
}

function mapStateToProps(state) {
  return {
    message: state.errorMessage,
    language: state.receiveLanguage
  }
}


export default withNamespaces('strings')(connect(mapStateToProps, mapDispatchToProps)(Contact))
