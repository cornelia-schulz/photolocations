import React from 'react'

const Contact = (props) => {
  return (
    <div className="contact">
      <img src="/images/Muriwai.jpg" alt="Muriwai" />
      <div className="contactText">
        <h1>Get in touch!</h1>
        <form className="contactForm">
          <label htmlFor="name">Your name:</label>
          <br />
          <input type="text" name="name" id="name" />
          <br />
          <label htmlFor="email">Your email:</label><br />
          <input type="email" name="email" id="email" /> <br />
          <label htmlFor="message">Your message:</label><br />
          <textarea rows="10" cols="50" id="message">
          </textarea>
          <br />
          <input className="button" type="submit" id="contactFormSubmit" />
        </form> 
      </div>
    </div>
  )
}
export default Contact