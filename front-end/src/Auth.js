import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'emmanuel-prado.auth0.com',
    clientID: 'Zpuq9UPOz8gy2hl01i43htzcUxVME4de',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://emmanuel-prado.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor() {
    this.login = this.login.bind(this);
  }

  login() {
    this.auth0.authorize();
  }
}
