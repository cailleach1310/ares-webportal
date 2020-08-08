import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  
  has_connections: function() {
      return Boolean(this.get('model.char.fs3.fs3_advantages').any(e => e == 'Connections')));
    },

  is_adept: computed('model', function() {
     let myrank = get this.get(model.char.groups) 'Rank';
     let isAdept = false;
     
     if ((myrank) && (myrank == 'Adept')) {
           isAdept = true;
       } 
    return isAdept;    
  })
  
});
