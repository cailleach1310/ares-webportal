import Component from '@ember/component';
import { computed } from '@ember/object';
import { get } from '@ember/object';

export default Component.extend({
  tagName: '',
  
  has_connections: computed(function() {
     return Boolean(char.custom.cg_connections);
  })

//
//  is_adept: computed('model', function() {
//    return ('model.char.groups["Rank"].value' == "Adept");
//  })
});
