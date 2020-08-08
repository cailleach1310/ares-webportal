import Component from '@ember/component';

export default Component.extend({
  tagName: ''
});

is_adept: computed(function() {
      return this.get('model.char.fs3.fs3_advantages').any(e => e == 'connections');
    });
