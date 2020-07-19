import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  didInsertElement: function() {
    let self = this;
    this.set('updateCallback', function() { return self.onUpdate(); } );
  },
 
  scions: computed(function() {
     let list = [];
     this.get('Global.custom.scions').forEach(function(s) {
       list.push({ value: s });
     });
     return list;
  }),

  onUpdate: function() {
    // Return a hash containing your data.  Character data will be in 'char'.  For example:
    // 
    return { marque: this.get('char.marque'), 
            scion: this.get('char.scion') };
  },


// actions: {      
//           scionChanged(val) {
//           this.set('model.char.custom.scion.value', val.value);
//        },
//   },

});
