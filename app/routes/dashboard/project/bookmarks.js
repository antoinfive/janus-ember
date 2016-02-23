import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.RSVP.hash({
      project: this.modelFor("dashboard/project"),
      bookmark: this.store.createRecord('bookmark')
    });
  },
  actions: {
    createBookmark(){
      let bookmark = this.modelFor(this.routeName).bookmark;
      let project = this.modelFor(this.routeName).project;
      bookmark.set("project", project);
      project.get('bookmarks').addObject(bookmark);
      bookmark.save().then(() => {
        bookmark = this.store.createRecord('bookmark');
      });
    }
  }
});
