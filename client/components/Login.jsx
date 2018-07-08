import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      user: null,
      token: ''
    };
  }

  logout = () => {
    this.setState(
      {
        isAuthenticated: false,
        token: '',
        user: null
      }
    )
  };

  facebookResponse = (e) => {};

  googleResponse = (e) => {};

  onFailure = (error) => {
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
          buttonText="Login"
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