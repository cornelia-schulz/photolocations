import React from 'react'

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
  axios({
    method: "POST",
    url:"http://localhost:3002/send",
    data: newMessage
  }).then((response) => {
    if(response.data.msg === 'success'){
      console.log('Message sent')
      this.resetForm()
    } else if(response.data.msg === 'fail'){
      console.log('Message failed to send')
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
        <form className='contactForm' id='contactForm' onSubmit={this.handleSubmit} method="POST">
          <label htmlFor='name'>Your name:</label>
          <br />
          <input type='text' name='name' id='name' onChange={this.handleChange} />
          <br />
          <label htmlFor='email'>Your email:</label><br />
          <input type='email' name='email' id='email' onChange={this.handleChange}/> <br />
          <label htmlFor='message'>Your message:</label><br />
          <textarea rows='10' cols='50' id='message' onChange={this.handleChange}>
          </textarea>
          <br />
          <input className='button' type='submit' id='contactFormSubmit' />
        </form> 
      </div>
    </div>
  )
}
}

export default Contact