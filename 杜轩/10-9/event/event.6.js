var emitter=require("events");
var util=require("util");
// console.log(emitter);
function person(name,age){
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);

var dz=new person('dz',18);

dz.setMaxListeners(15);
dz.addListener('say',function(){
    console.log(this.name);
})
dz.addListener('say',function(){
    console.log(2);
})
dz.addListener('say',function(){
    console.log(3);
})
dz.addListener('say',function(){
    console.log(4);
})
dz.addListener('say',function(){
    console.log(5);
})
dz.addListener('say',function(){
    console.log(6);
})
dz.addListener('say',function(){
    console.log(7);
})
dz.addListener('say',function(){
    console.log(8);
})
dz.addListener('say',function(){
    console.log(9);
})
dz.addListener('say',function(){
    console.log(10);
})
dz.addListener('say',function(){
    console.log(11);
})

dz.emit('say');

console.log(dz.listeners('say'));

console.log(dz.listenerCount('say'));