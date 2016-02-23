import Ember from 'ember';

export default Ember.Component.extend({
  points: [0, 1, 2, 3, 5, 8, 13],
  statuses: ["icebox", "todo", "doing", "done", "dropped"],
  actions:{
    submit(){
        this.sendAction('onSubmit');
    }
  }
});
