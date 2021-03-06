/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'janus-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      API_HOST: 'http://192.168.1.37:3000', // default setting
      TOKEN_ENDPOINT: 'http://192.168.1.37:3000/users/sign_in'
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.API_HOST = 'http://localhost:3000'; // override
    ENV.APP.TOKEN_ENDPOINT = 'http://localhost:3000/users/sign_in';
  }


  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.API_HOST = 'http://janus-api.herokuapp.com';
    ENV.APP.TOKEN_ENDPOINT = 'http://janus-api.herokuapp.com/users/sign_in';
  }

  return ENV;
};
