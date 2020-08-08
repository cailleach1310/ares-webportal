import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  has_connections: function() {
      return Boolean(this.get('model.char.fs3.fs3_advantages').any(e => e == 'Connections')));
    },

  is_adept: function() {
     let groups = this.get('model.char.groups');
     let isAdept = false;
     
     if ((groups["rank"].value) && (groups["rank"].value == 'Adept')) {
           isAdept = true;
       } 
    return isAdept;    
  }
  
});
