import Ember from 'ember';

export default Ember.Controller.extend({
  storyModal: false,
  dropModal: false,
  actions: {
    closeStoryModal(){
      this.set('storyModal', false);
    },
    showStoryModal(){
      this.set('storyModal', true);
    },
    closeDropModal(){
      this.set('dropModal', false);
    },
    showDropModal(storyId, storyName){
      this.set('dropModal', true);
      this.set('dropStoryId', storyId);
      this.set('dropStoryName', storyName);
    },
    createStory(){
      this.send('closeStoryModal');
      return true;
    },
    changeState(_, newState){
      if(newState === "dropped"){
        this.send('closeDropModal');
      }
      return true;
    }
  }
});
