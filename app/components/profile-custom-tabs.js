import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  has_marque: function() {
      return Boolean('model.char.custom.marque');
    },
  
  has_goals: function() {
      return Boolean('model.char.custom.goals');
    },
  
  has_connections: function() {
      return Boolean('model.char.custom.connections');
    }
  
});
