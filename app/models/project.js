import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  github_link: DS.attr('string'),
  state: DS.attr('string',  {defaultValue: function() { return "incomplete"; }}),
  description: DS.attr('string'),
  user: DS.belongsTo('user'),
  bookmarks: DS.hasMany('bookmark'),
  snippets: DS.hasMany('snippet'),
  stories: DS.hasMany('story'),
  github: function(){
    if (this.get("github_link").includes("http://")){
      return this.get("github_link");
    } else {
      return "http://".concat(this.get("github_link"));
    }
  }.property('github_link'),
  progress: function(){
    let total = 0;
    let complete = 0;
    let stories = this.get("activeStories");
    stories.forEach((story)=>{
      total += story.get('points');
      if(story.get('state') === "done"){
        complete += story.get('points');
      }
    });
    if (total === 0) {
      return 0;
    } else {
      return Math.round(complete / total * 100);
    }
  }.property('stories.@each.state'),
  icebox: function(){
    return this.get("stories").map((story)=>{if (story.get('state') === "icebox"){return story;}}).filter(function(val) { return val !== undefined; });
  }.property('stories.@each.state'),
  todo: function(){
    return this.get("stories").map((story)=>{if (story.get('state') === "todo"){return story;}}).filter(function(val) { return val !== undefined; });
  }.property('stories.@each.state'),
  doing: function(){
    return this.get("stories").map((story)=>{if (story.get('state') === "doing"){return story;}}).filter(function(val) { return val !== undefined; });
  }.property('stories.@each.state'),
  done: function(){
    return this.get("stories").map((story)=>{if (story.get('state') === "done"){return story;}}).filter(function(val) { return val !== undefined; });
  }.property('stories.@each.state'),
  dropped: function(){
    return this.get("stories").map((story)=>{if (story.get('state') === "dropped"){return story;}}).filter(function(val) { return val !== undefined; });
  }.property('stories.@each.state'),
  activeStories: function(){
    return this.get("stories").map((story)=>{if (story.get('state') !== "dropped"){return story;}}).filter(function(val) { return val !== undefined; });
  }.property('stories.@each.state'),
  currentStories: function(){
    return this.get("doing").concat(this.get("todo"))
  }.property('todo.@each.state')
});
