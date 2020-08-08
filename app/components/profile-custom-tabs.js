import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  has_marque: function() {
      return Boolean('char.custom.marque');
    },
  
  has_goals: function() {
    let goals = this.get('model.char.custom.goals');
    return ((goals != nil) && (goals != ""));
  },
  
  no_connections: function() {
    let con = this.get('model.char.custom.connections');
    return ((con == nil) || (con == ""));
  }
  
});
