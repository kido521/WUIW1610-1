var emitter = require('events');
var util = require('util');
function person(name,age) {
    this.name = name;
    this.age=age;
}
util.inherits(person,emitter);

var xh = new person('小米',19);
function aa() {
    console.log(this.name);
}
xh.addListener('say',aa);

function bb() {
    console.log(this.age);
}
xh.addListener('say',bb);
xh.emit('say');
xh.removeListener('say',aa);//移除指定事件的某个监听器
// xh.removeAllListeners('say');//移除所有事件的某个监听器
xh.emit('say');