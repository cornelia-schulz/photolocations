import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      user: null,
      token: ''
    };
    this.logout = this.logout.bind(this);
  }

  logout () {
    this.setState({
        isAuthenticated: false,
        user: null,
        token: ''
      })
  }

  facebookResponse(e) {};

  googleResponse(e) {};

  onFailure(error) {
    console.log(error);
  }

  render () {
    let content = !!this.state.isAuthenticated ? (
      <div>
        <p>Authenticated</p>
        <div>
          {this.state.user.email}
        </div>
        <div>
          <button onClick={this.logout} className="logoutButton"> Log out </button>
        </div>
      </div>
    ) : (
      <div>
        <FacebookLogin
          appId="XXXXXXXXXX"
          autoLoad={false}
          fields="name, email, picture"
          callback={this.facebookResponse} />
        <GoogleLogin
          clientId="XXXXXXXXXX"
          buttonText="Login with Google"
          onSuccess={this.googleResponse}
          onFailure={this.googleResponse} />
      </div>
    );

    return (
      <div className="Login">
        {content}
      </div>
    );
  }

}

export default Login