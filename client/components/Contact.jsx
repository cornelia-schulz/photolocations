import React from 'react'
import {connect} from 'react-redux'
import {sendMail} from '../actions/contact'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-124825499-1')
ReactGA.pageview(window.location.pathname + window.location.search)

class Contact extends React.Component {
constructor(props){
  super(props)
  this.state = {
    name: null,
    email: null,
    message: null
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.resetForm = this.resetForm.bind(this)
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
      console.log(response)
      if(response === 'success'){
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

render(){
  return (
    <div className='contact'>
      <img src='/images/Muriwai.jpg' alt='Muriwai' />
      <div className='contactText'>
        <h1>Get in touch!</h1>
        {this.props.message && <span className='error'>{this.props.message}</span>}
        <form className='contactForm' id='contactForm' onSubmit={this.handleSubmit} method="POST">
          <label htmlFor='name'>Your name:</label>
          <br />
          <input type='text' name='name' id='name' onChange={this.handleChange} />
          <br />
          <label htmlFor='email'>Your email:</label><br />
          <input type='email' name='email' id='email' onChange={this.handleChange}/> <br />
          <label htmlFor='message'>Your message:</label><br />
          <textarea rows='10' cols='50' name='message' id='message' onChange={this.handleChange}>
          </textarea>
          <br />
          <input className='button' type='submit' id='contactFormSubmit' />
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

function mapStateToProps (state) {
  return {
    message: state.errorMessage,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Contact)
