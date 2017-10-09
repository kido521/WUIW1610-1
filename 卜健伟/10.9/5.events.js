var emitter=require("events");
var util=require("util");
function person(name,age){
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);
var xh=new person('老哥',18);
function aa(){
    console.log(this.name);
}
function bb(){
    console.log(this.age);
}
function cc(){
    this.name='老哥稳';
}
xh.on('say',aa);
xh.on('change',cc);
xh.on('say',bb);
xh.emit('change');
xh.emit('say');
xh.removeAllListeners();
xh.emit('say');