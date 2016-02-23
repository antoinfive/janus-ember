import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
// import ENV from '../config/environment';

export default DeviseAuthenticator.extend({
  // serverTokenEndpoint: ENV.APP.TOKEN_ENDPOINT
  serverTokenEndpoint: "http://localhost:3000/users/sign_in"
});

// {"authenticated":{"authenticator":"authenticator:devise","token":"Aw2ZFF2KlMIopT_p1OSu","email":"adam@may.com"}}
//
// .match(/(?:"token":")(\w+)(?:","email")/)[1]
