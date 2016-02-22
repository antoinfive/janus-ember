import DS from 'ember-data';

export default DS.Model.extend({
  link: DS.attr('string'),
  title: DS.attr('string'),
  jankiness: DS.attr('string'),
  user: DS.belongsTo('user'),
  projects: DS.hasMany('project', {async: true, polymorphic: true}),
  tags: DS.hasMany('tag'),
  bookmarkLink: function(){
    if (this.get("link").includes("http://")){
      return this.get("link");
    } else {
      return "http://".concat(this.get("link"));
    }
  }.property('link')
});
