import Ember from 'ember';

export default Ember.Component.extend({

  data:  Ember.computed('project.stories.@each.state', function(){
    var colors = []
    var todoStories = this.get('project').get('stories').filterBy('state', 'todo');
    var doingStories = this.get('project').get('stories').filterBy('state', 'doing');
    var stories = todoStories.concat(doingStories);
    var datasets = [];
    var storyData = {
      value: 1,
      color:"#464545",
      highlight: "#2c2c2c",
      label: "No stories in progress"
    };
    stories.forEach(function(story){
      storyData.label = story.get('name');
      storyData.value = story.get('points');
      if (story.get('state') === "doing") {
        storyData.color = "#3498db";
        storyData.highlight = "#217dbb";
      } else if (story.get('state') === "todo") {
        storyData.color = "#f39c12";
        storyData.highlight = "#c87f0a";
      };
      datasets.push(storyData);
    });
    if (datasets.length === 0) {
        datasets.push(storyData);
    }
    return datasets;
  })
});