import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  has_connections: computed(function() {
//      return Boolean(this.get('model.char.fs3.fs3_advantages').any(e => e == 'connections')));
       return true;
    }),

  is_adept: computed(function() {
     
      return Boolean(this.get('model.char.groups['rank']) == 'Adept');
    })
  
});
