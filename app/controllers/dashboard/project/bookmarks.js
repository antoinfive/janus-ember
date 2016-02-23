import Ember from 'ember';

export default Ember.Controller.extend({
  bookmarkModal: false,
  actions: {
    closeBookmarkModal(){
      this.set('bookmarkModal', false);
    },
    showBookmarkModal(){
      this.set('bookmarkModal', true);
    },
    createBookmark(){
      this.send('closeBookmarkModal');
      return true;
    }
  }
});
