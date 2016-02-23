import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showModal(){
      this.sendAction('showItemModal');
    }
  }
});
