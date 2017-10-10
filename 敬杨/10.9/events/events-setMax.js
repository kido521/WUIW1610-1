var emitter = require("events");
// console.log(emitter);
var util = require("util");

function person(name,age){
    this.name = name;
    this.age = age;
}
util.inherits(person,emitter);

var xh = new person("jingyang",23);

xh.setMaxListeners(14);

xh.addListener('say',function(){
    console.log(this.name);
})
xh.addListener('say',function(){
    console.log(this.age);
})
xh.addListener('say',function(){
    console.log(this.age+this.name);
})
xh.addListener('say',function(){
    console.log(55);
})
xh.addListener('say',function(){
    console.log(66);
})
xh.addListener('say',function(){
    console.log(77);
})
xh.addListener('say',function(){
    console.log(88);
})
xh.addListener('say',function(){
    console.log(99);
})
xh.addListener('say',function(){
    console.log(10);
})
xh.addListener('say',function(){
    console.log(11);
})
xh.addListener('say',function(){
    console.log(12);
})


xh.emit('say');
