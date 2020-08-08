import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  has_connections: computed(function() {
      return Boolean(this.get('model.char.fs3.fs3_advantages').any(e => e == 'Connections')));
 //      return true;
    }),

  is_adept: computed(function() {
//     let groups = this.get('model.char.groups');
     let isAdept = false;
     
 //    Object.keys(groups).forEach(g => {
 //       if (groups[g].value == 'Adept') {
 //           isAdept = true;
 //       } 
  //   });
     return isAdept;    
  })
  
});
