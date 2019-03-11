/* eslint no-restricted-globals: 0 */
import auth0 from 'auth0-js';

const LOGIN_SUCCESS_PAGE = '/schedule';
const LOGIN_FAILURE_PAGE = '/';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'emmanuel-prado.auth0.com',
    clientID: 'Zpuq9UPOz8gy2hl01i43htzcUxVME4de',
    redirectUri:
      'https://workout-tracker-pt2.netlify.com/callback' ||
      'http://localhost:3000/callback',
    audience: 'https://emmanuel-prado.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem('access_token', authResults.accessToken);
        localStorage.setItem('id_token', authResults.idToken);
        localStorage.setItem('expires_at', expiresAt);
        location.hash = '';
        location.pathname = LOGIN_SUCCESS_PAGE;
      } else if (err) {
        location.pathname = LOGIN_FAILURE_PAGE;
        console.log(err);
      }
    });
  };

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  };

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    location.pathname = LOGIN_FAILURE_PAGE;
  };
}
