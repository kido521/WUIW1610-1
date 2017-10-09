var emitter = require("events");
// console.log(emitter);
var util = require("util");

function person(name,age){
    this.name = name;
    this.age = age;
}
util.inherits(person,emitter);

var xh = new person("jingyang",23);

xh.addListener('say',function(){
    console.log(this.name);
})
xh.addListener('say',function(){
    console.log(this.age);
})
xh.addListener('say',function(){
    console.log(this.age+this.name);
})

xh.emit('say');
