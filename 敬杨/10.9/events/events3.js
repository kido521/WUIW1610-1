var emitter = require("events");
// console.log(emitter);
var util = require("util");

function person(name,age){
    this.name = name;
    this.age = age;
}
util.inherits(person,emitter);

var xh = new person("jingyang",23);

xh.on('say',function(){
    console.log(this.name);
})
xh.on('say',function(){
    console.log(this.age);
})
xh.on('say',function(){
    console.log(this.age+this.name);
})

xh.emit('say');