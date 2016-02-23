import Ember from 'ember';

export default Ember.Component.extend({

  data:  Ember.computed('project.stories.@each.state', function(){
    var stories = this.get('project').get('currentStories');
    var datasets = [];
    var defaultData = {
      value: 1,
      color:"#464545",
      highlight: "#2c2c2c",
      label: "No stories in progress"
    };
    stories.forEach(function(story){
      var storyData = {
        value: null,
        color:"",
        highlight: "",
        label: ""
      };
      storyData.label = story.get('name');
      storyData.value = story.get('points');
      if (story.get('state') === "doing") {
        storyData.color = "#f39c12";
        storyData.highlight = "#c87f0a";
      } else if (story.get('state') === "todo") {
        storyData.color = "#f39c12";
        storyData.highlight = "#c87f0a";
      }
      datasets.push(storyData);
    });
    if (datasets.length === 0) {
        datasets.push(defaultData);
    }
    return datasets;
  })
});