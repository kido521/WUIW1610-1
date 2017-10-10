var EventEmitter=require('events');
var util = require('util');
function person(name,age){
    this.name = name;
    this.age=age;
}
util.inherits(person,EventEmitter);
var xh=new person('小红',19);
function aa() {
    console.log(this.name);
}
xh.addListener('say',aa)

function bb() {
    console.log(this.age);
}
xh.addListener('say',bb)

function cc() {
    console.log('她叫'+this.name+',今年'+this.age);
}
xh.addListener('say',cc)


xh.emit('say');
xh.removeAllListeners('say');
xh.emit('say');

