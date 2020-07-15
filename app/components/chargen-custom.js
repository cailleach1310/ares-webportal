import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  didInsertElement: function() {
    let self = this;
    this.set('updateCallback', function() { return self.onUpdate(); } );
  },
 
// scions = ("Naamah","Eisheth","Camael"),
// scions: function() {
//   let list = [];
//   this.get(custom.scions).forEach(function(g) {
//     list.push({ value: g });
//    });
//  return list;
//},
  
scionChanged(val) {
   this.set('model.char.custom.scion.value', val.value);
},

  onUpdate: function() {
    // Return a hash containing your data.  Character data will be in 'char'.  For example:
    // 
    return { marque: this.get('char.marque') };
//    return { scion: this.get('model.char.custom.scion') };
  }
});
