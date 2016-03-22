import Ember from 'ember';

export default Ember.Component.extend({

  data:  Ember.computed('project.stories.@each.state', function(){
    var stories = this.get('project').get('icebox');
    var datasets = [];
    var defaultData = {
      value: 1,
      color:"#464545",
      highlight: "#2c2c2c",
      label: "No icebox stories"
    };
    stories.forEach(function(story){
      var storyData = {
        value: 1,
        color:"#00bc8c",
        highlight: "#008966",
        label: ""
      };
      storyData.label = story.get('name');
      storyData.value = story.get('points');
      storyData.color = "#3498db";
      storyData.highlight = "#217dbb";
      datasets.push(storyData);
    });
    if (datasets.length === 0) {
        datasets.push(defaultData);
    }
    return datasets;
  }),
  options: {
    animationSteps : 100,
    animationEasing : "easeInOutQuart",
    animateScale : true,
    segmentStrokeColor : "#303030",
    segmentStrokeWidth : 3,
    tooltipFontSize: 12,
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
    tooltipXOffset: 30
  }
});