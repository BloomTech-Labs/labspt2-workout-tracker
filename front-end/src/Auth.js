import auth0 from 'auth0-js';

// change variable on redirectUri accordingly, LOCAL if you are working off localhost:3000, and DEPLOYED if you are ready to make a pull request!
const DEPLOYED = 'https://workout-tracker-pt2.netlify.com';
const LOCAL = 'http://localhost:3000';
const TESTING = 'https://testing-testing.netlify.com';

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'emmanuel-prado.auth0.com',
      clientID: 'Zpuq9UPOz8gy2hl01i43htzcUxVME4de',
      redirectUri: `${DEPLOYED}/callback`,
      audience: 'https://emmanuel-prado.auth0.com/userinfo',
      responseType: 'id_token',
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
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        // set the time that the id token will expire at
        this.expiresAt = authResult.idTokenPayload.exp * 1000;
        resolve();
      });
    });
  }

  logout() {
    // clear id token, profile, and expiration
    this.idToken = null;
    this.profile = null;
    this.expiresAt = null;
  }
}

const auth = new Auth();

export default auth;
