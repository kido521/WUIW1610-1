var emitter = require("events");
var util = require("util");
function person(name,age){
    this.name = name;
    this.age = age;
}
util.inherits(person,emitter);
var xh = new person('小红','19');
//绑定事件
function aa(){
    console.log(this.name);
}
xh.on('say',aa);
function bb(){
    console.log(this.age);
}
xh.on('say',bb);
xh.emit('say');
xh.removeListener('say',aa);
xh.removeListener('say',bb);
xh.emit('say');