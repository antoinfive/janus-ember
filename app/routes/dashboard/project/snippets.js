import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.RSVP.hash({
      project: this.modelFor("dashboard/project"),
      snippet: this.store.createRecord('snippet')
    });
  },
  actions: {
    createSnippet(){
      let snippet = this.modelFor(this.routeName).snippet;
      let project = this.modelFor(this.routeName).project;
      snippet.set("project", project);
      project.get('snippets').addObject(snippet);
      snippet.save().then(() => {
        snippet = this.store.createRecord('snippet');
      });
    }
  }
});
