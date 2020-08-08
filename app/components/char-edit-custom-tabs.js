import Component from '@ember/component';

export default Component.extend({
  tagName: ''
});

has_connections: computed(function() {
      return (this.get('model.char.fs3_advantages').any(e => e == 'connections'));
    });

is_adept: computed(function() {
      return (this.get('model.char.ranks_rank') == "Adept");
    });
