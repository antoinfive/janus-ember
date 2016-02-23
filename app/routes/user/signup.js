import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';


export default Ember.Route.extend(UnauthenticatedRouteMixin,  {
  model(){
    return this.store.createRecord('user');
  },
  session: Ember.inject.service('session'),
  actions: {
    signUp(){
      let newUser = this.modelFor(this.routeName);
      newUser.save().then(()=>{
        debugger;
        this.get('session').authenticate('authenticator:devise', newUser.get('email'), newUser.get('password')).then(()=>{
          this.transitionTo('application');
        }).catch((reason)=>{
          this.set('errorMessage', reason.error || reason);
        });
      }).catch((reason)=>{
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
