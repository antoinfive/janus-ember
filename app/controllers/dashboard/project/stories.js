import Ember from 'ember';

export default Ember.Controller.extend({
  storyModal: false,
  actions: {
    closeStoryModal(){
      this.set('storyModal', false);
    },
    showStoryModal(){
      this.set('storyModal', true);
    },
    createStory(){
      this.send('closeStoryModal');
      return true;
    }
  }
});
