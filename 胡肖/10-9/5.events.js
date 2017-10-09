var emitter = require("events");
var util = require("util");
function person(name,age){
    this.name = name;
    this.age = age;
}
util.inherits(person,emitter);
var xh = new person('小红',19);
function aa(){
    console.log(this.name);
}
xh.on('say',aa);

function bb(){
    console.log(this.age);
}
xh.on('say',bb);

xh.on('change',function(name){
    this.name = name;
})
xh.emit('say');
xh.removeAllListeners('say');
xh.emit('change','king');
xh.emit('say');