import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    addTag(){

      let bookmark = this.get('model').bookmark;
      debugger;
      let tag = this.store.createRecord('tag');
      bookmark.get('tags').addObject(tag);
    }
  }
});