var emitter = require('events')
var util =require('util');

function person(name,age){
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter)

var xh= new person('小明',22)

function aa() {
    console.log(this.name);
}

function bb() {
    console.log(this.age);
}

xh.on('say',aa);
xh.on('say',bb);
xh.emit('say');
xh.removeListener('say',aa)
xh.emit('say');
xh.removeAllListeners('say')  //删除全部
xh.emit('say');