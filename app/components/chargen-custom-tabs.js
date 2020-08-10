import Component from '@ember/component';
import { computed } from '@ember/object';
import { get } from '@ember/object';

export default Component.extend({
  tagName: '',
  
  has_connections: computed('model', function() {
      return this.get('char.fs3.fs3_advantages').any(e => e == 'Connections');
    }),

  is_adept: computed('model', function() {
    return ('model.char.groups["rank"].value' == "Adept");
  })
});
