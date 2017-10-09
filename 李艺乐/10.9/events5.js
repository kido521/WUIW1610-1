var emitter = require("events");
var util = require("util");
function person(name,age){
    this.name = name;
    this.age = age;
}
util.inherits(person,emitter);
var xh = new person('xiaohong','100');

function aa(){
    console.log(this.name);
}
xh.on('say',aa);
// xh.on('say',function(){
//     console.log(this.age);
// });
function bb(){
    console.log(this.age);
}
xh.on('say',bb);

xh.on('change',function(name){
    this.name = name;
})
xh.emit('say');
xh.removeAllListeners('say');//
xh.emit('change','hhh');
xh.emit('say');
