import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  has_marque: function() {
      return Boolean('char.custom.marque');
    },
  
  has_goals: function() {
      return Boolean('char.custom.goals');
    },
  
  has_connections: function() {
      return Boolean('char.custom.connections');
    }
  
});
