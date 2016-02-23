import Ember from 'ember';

export default Ember.Controller.extend({
  snippetModal: false,
  actions: {
    closeSnippetModal(){
      this.set('snippetModal', false);
    },
    showSnippetModal(){
      this.set('snippetModal', true);
    },
    createSnippet(){
      this.send('closeSnippetModal');
      return true;
    }
  }
});
