import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showDropModal(storyId, storyName){
      this.sendAction('warning', storyId, storyName);
    }
  }
});
