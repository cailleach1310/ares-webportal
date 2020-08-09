import Component from '@ember/component';
import { computed } from '@ember/object';
import { get } from '@ember/object';

export default Component.extend({
  tagName: '',
  
  has_connections: computed(function() {
      return this.get('model.char.fs3.fs3_advantages').any(e => e == 'connections');
    }),

  is_adept: computed('model', function() {
//    let groups = this.get('model.char.groups');
    let key = 'rank';
    if ((groups[key].value) && (groups[key].value == "Adept")) {
       return true;
    } else {
      return false;
    }
  })
});
