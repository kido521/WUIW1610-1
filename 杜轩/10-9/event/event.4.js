var emitter=require("events");
var util=require("util");
// console.log(emitter);
function person(name,age){
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);

var dz=new person('dz',18);

function aa(){
    console.log(this.name);
}
function bb(){
    console.log(this.age);
}
dz.on('say',aa);
dz.on('say',bb);
dz.emit('say');
dz.removeListener('say',aa);
dz.emit('say');