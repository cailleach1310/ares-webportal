import Component from '@ember/component';
import { computed } from '@ember/object';
import { get } from '@ember/object';

export default Component.extend({
  tagName: '',
  
  has_connections: computed(function() {
      return this.get('model.char.fs3.fs3_advantages').any(e => e == 'connections');
    }),

  is_adept: computed(function() {
//      let myrank = this.get('model.char.groups','rank');
    let myrank = "Adept";
    if myrank {               
          return (myrank == "Adept");
      } else {
          return false;
      } 
  })
  
});
