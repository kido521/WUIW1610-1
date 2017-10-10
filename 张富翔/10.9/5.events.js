var emitter =require("events");
var util =require("util");
function person(name,age) {
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);

var xh=new person('小红');

function  aa(name){
    console.log(this.name);
}
function bb(name){
    console.log('小绿')
}

xh.on('say',aa);
xh.on('say',bb);
xh.removeAllListeners();
xh.emit('say');
xh.emit('say');