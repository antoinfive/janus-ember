import Ember from 'ember';

export default Ember.Component.extend({

  data:  Ember.computed('project.stories.@each.state', function(){
    var colors = []
    var stories = this.get('project').get('stories').filterBy('state', 'done');
    var datasets = [];
    var storyData = {
      value: 1,
      color:"#464545",
      highlight: "#2c2c2c",
      label: "No stories completed"
    };
    stories.forEach(function(story){
      var storyData = {
        value: 1,
        color:"#00bc8c",
        highlight: "#008966",
        label: ""
      }
      storyData.label = story.get('name') + " - Points";
      storyData.value = story.get('points');
      datasets.push(storyData);
    });
    if (datasets.length === 0) {
        datasets.push(storyData);
    }
    return datasets;
  })
});