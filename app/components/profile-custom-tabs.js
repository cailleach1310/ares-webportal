import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  has_marque: function() {
      return Boolean('char.custom.marque');
    },
  
  has_goals: function() {
    let g = false;
    if ('char.custom.goals') {
      if ('char.custom.goals' != "") {
        g = true;
      }
    }
    return g;
  },
  
  has_connections: function() {
      return Boolean('char.custom.connections');
    }
  
});
