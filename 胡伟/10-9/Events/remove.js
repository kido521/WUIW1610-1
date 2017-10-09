const emitter = require('events');
const util = require('util');
function person(name,age) {
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);
var xh = new person('小红',19);

function aa() {
    console.log(this.name);
}
function bb() {
    console.log(this.age);
}
xh.on('say',aa);
xh.on('say',bb);
xh.emit('say');//第一次输出
xh.removeListener('say',aa);
xh.emit('say'); //移除事件aa 后输出
xh.removeAllListeners();
xh.emit('say');  // 移除所有事件后输出