import Component from '@ember/component';
import { computed } from '@ember/object';
import { get } from '@ember/object';

export default Component.extend({
  tagName: '',
  
  has_connections: computed('model.char.fs3.fs3_advantages', function() {
      return this.get('model.char.fs3.fs3_advantages').any(e => e == 'Connections');
    }),

  is_adept: computed('model.char.groups', function() {
    let myrank = this.get('model.char.groups').any(r => r == 'rank');
    return (myrank.value == "Adept");
  })
});
