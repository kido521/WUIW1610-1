var emitter=require("events");
var util=require("util");
// console.log(emitter);
function person(name,age){
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);

var dz=new person('dz',18);

dz.once('say',function(){
    console.log(this.name);
})

dz.on('change',function(){
    this.name="ww";
    console.log('运行一次');
})

dz.emit('say');
dz.emit('change');
dz.emit('say');