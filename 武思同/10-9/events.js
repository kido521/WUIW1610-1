
var EventEmitter = require('events');
var util = require('util');
function person(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}
util.inherits(person,EventEmitter);
var xiaohong = new person('小红',19,'man');

function aa() {
    console.log(xiaohong.name);
}
function bb() {
    console.log(xiaohong.age);
}
function cc() {
    console.log(xiaohong.sex);
}

xiaohong.addListener('say',aa);
xiaohong.on('say',bb);
xiaohong.listeners('say');
xiaohong.listenerCount('say');
xiaohong.once('say',cc);

xiaohong.emit('say');
// xiaohong.removeAllListeners('say');

xiaohong.removeListener('say',aa);

xiaohong.emit('say');