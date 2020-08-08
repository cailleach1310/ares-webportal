import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  has_marque: function() {
      return Boolean('char.custom.marque');
    },
  
  has_goals: function() {
    let goals = this.get('model.char.custom.goals');
    
    if (goals) {
       return (goals != "");
    }
    else {
      return false;
    }
  },
  
  no_connections: function() {
    let c = true;
    if ('char.custom.connections') {
      if ('char.custom.connections' != "") {
        c = false;
      }
    }
    return c;
  }
  
});
