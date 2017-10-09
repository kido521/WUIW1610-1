var emitter=require("events");
var util=require("util");
// console.log(emitter);
function person(name,age){
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);

var dz=new person('dz',18);

dz.addListener('say',function(){
    console.log(this.name);
})

dz.addListener('say',function(){
    console.log(this.age);
})

dz.emit('say');
