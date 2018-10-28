import React from 'react'
import FacebookLogin from 'react-facebook-login'
import {GoogleLogin} from 'react-google-login'
import InstagramLogin from 'react-instagram-login'
import i18n from 'i18next'
import { withNamespaces } from 'react-i18next'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false,
      user: null,
      token: ''
    }
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.setState({
      isAuthenticated: false,
      user: null,
      token: ''
    })
  }

  facebookResponse(response) {
    // console.log(response)
    const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application.json' })
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    }
    fetch('https://localhost:3000/api/v1/auth/facebook', options).then(r => {
      const token = r.headers.get('x-auth-token')
      r.json().then(user => {
        if (token) {
          this.setState({ isAuthenticated: true, user, token })
        }
      })
    })
  }

  instagramResponse(response) {
    console.log(response)
    const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken}, null, 2)], { type: 'application/json'})
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    }
    fetch('http://localhost:3000/api/v1/auth/instagram', options).then(r=> {
      const token = r.headers.get('x-auth-token')
      r.json().then(user => {
        if(token) {
          this.setState({ isAuthenticated: true, user, token })
        }
      })
    })
  }

  googleResponse(response) {
    // console.log(response);
    const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' })
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    }
    fetch('https://localhost:3000/api/v1/auth/google', options).then(r => {
      const token = r.headers.get('x-auth-token')
      r.json().then(user => {
        if (token) {
          // console.log('token received')
          this.setState({ isAuthenticated: true, user, token })
        }
      })
    })
  }

  onFailure(error) {
    console.log(error)
  }

  render() {
    let { t, i18n } = this.props
    let content = !!this.state.isAuthenticated ? (
      <div>
        <p>{t('login.authenticated')}</p>
        <div>
         <p>{t('login.welcome')} {this.state.user.full_name}</p>
         <p>{this.state.user.email}</p>
        </div>
        <div>
        <button onClick={this.logout} className="logoutButton button"> {t('login.logout')} </button>
        </div>
      </div>
    ) : (
        <div className="login">
          <FacebookLogin
            appId={facebookAppId}
            buttonText={t('login.facebook')}
            autoLoad={false}
            fields="name, email, picture"
            callback={this.facebookResponse} />
          <GoogleLogin
            clientId={googleClientId}
            buttonText={t('login.google')}
            onSuccess={this.googleResponse.bind(this)}
            onFailure={this.googleResponse} /><br/><br/>
          <InstagramLogin id="insta-button"
            buttonText="LOGIN WITH INSTAGRAM" />
        </div>
      )

    return (
      <div className="Login">
        {content}
      </div>
    )
  }

}

export default withNamespaces('strings')(Login)