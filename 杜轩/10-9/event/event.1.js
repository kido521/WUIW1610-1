var emitter=require("events");
var util=require("util");
// console.log(emitter);
function person(name){
    this.name=name;
}
util.inherits(person,emitter);

var dz=new person('dz');

dz.addListener('say',function(){
    console.log(this.name);
})

dz.addListener('change',function(name){
    this.name=name;
})

dz.emit('say');
dz.emit('change',"qq");
dz.emit('say');
dz.emit('change',"cc");
dz.emit('say');