import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createTalk: function() {
      var talk = this.store.createRecord('talk', {
        speaker: this.get('speaker'),
        topic: this.get('topic')
      });
      talk.save();
    },
    deleteTalk: function(item) {
      item.deleteRecord();
      item.save();
    }
  }
});
