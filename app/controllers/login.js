import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  applicationController: Ember.inject.controller('application'),
  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:devise', identification, password).then(()=>{
        this.get('store').findRecord('user', 'me').then((user) => {
          this.sendAction('setCurrentUser', user);
        });
      }).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    },
    setCurrentUser(user){
      this.get("applicationController").set('currentUser', user);
    }
  }
});
