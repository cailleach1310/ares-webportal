import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  didInsertElement: function() {
    let self = this;
    this.set('updateCallback', function() { return self.onUpdate(); } );
  },
  
  scions: computed(function() {
    let list = [];
   	scionList = Global.read_config("custom", "scion_list")
    this.get(scionList).forEach(function(g) {
       list.push({ value: g });
    });
    return list;
  }),
  
  scionChanged(val) {
     this.set('model.char.scion.value', val.value);
  },

  onUpdate: function() {
    // Return a hash containing your data.  Character data will be in 'char'.  For example:
    // 
    return { marque: this.get('char.marque') };
    return { scion: this.get('char.scion') };
  }
});
