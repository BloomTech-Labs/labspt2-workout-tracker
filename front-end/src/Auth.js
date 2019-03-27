import auth0 from 'auth0-js';

// change variable on redirectUri accordingly, LOCAL if you are working off localhost:3000, and DEPLOYED if you are ready to make a pull request!
const DEPLOYED = 'https://workout-tracker-pt2.netlify.com';
const LOCAL = 'http://localhost:3000';
const TESTING = 'https://testing-testing.netlify.com';

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'workout-tracker-pt2.auth0.com',
      clientID: 'hoc1jpgL2TX2BkA1Q92gImRj7M90MjlO',
      redirectUri: `${DEPLOYED}/callback`,
      audience: 'https://workout-tracker-pt2.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  getProfile() {
    return this.profile;
  }

  getIdToken() {
    return this.idToken;
  }

  getAccessToken() {
    return this.accessToken;
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.accessToken = authResult.accessToken;
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        // set the time that the id token will expire at
        this.expiresAt = authResult.idTokenPayload.exp * 1000;
        resolve();
      });
    });
  }

  logout() {
    // clears accessToken, id token, profile, and expiration
    this.accessToken = null;
    this.idToken = null;
    this.profile = null;
    this.expiresAt = null;
  }
}

const auth = new Auth();

export default auth;
