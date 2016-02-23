import Ember from 'ember';

export default Ember.Component.extend({

  data:  Ember.computed('project.stories.@each.state', function(){
    var stories = this.get('project').get('stories').filterBy('state', 'icebox');
    var datasets = [];
    var storyData = {
      value: 1,
      color:"#464545",
      highlight: "#2c2c2c",
      label: "No icebox stories"
    };
    stories.forEach(function(story){
      storyData.label = story.get('name');
      storyData.value = story.get('points');
      storyData.color = "#d2eff8";
      storyData.highlight = "#bbd6df";
      datasets.push(storyData);
    });
    if (datasets.length === 0) {
        datasets.push(storyData);
    }
    return datasets;
  })
});