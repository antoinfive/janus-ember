import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.RSVP.hash({
      project: this.modelFor("dashboard/project"),
      story: this.store.createRecord('story')
    });
  },
  actions: {
    newStory(){
      this.refresh();
    },
    changeState(storyId, newState){
      this.store.findRecord('story', storyId).then((story)=>{
        story.set('state', newState);
        story.save();
      });
    },
    createStory(){
     let story = this.modelFor(this.routeName).story;
     let project = this.modelFor(this.routeName).project;
     story.set("project", project);
     story.save().then(()=>{
       this.send('newStory');
      //  this.model().then((newModel)=>{
      //    this.modelFor(this.routeName) = newModel;
      //  });
     });
   },
   editStory: function(){
     let story = this.modelFor(this.routeName);
     story.save();
   },
   destroy: function(){
     let story = this.modelFor(this.routeName);
     let project = this.modelFor('projects.project');
     story.destroyRecord();
     this.transitionTo('dashboard.project', project);
   }
  }
});
