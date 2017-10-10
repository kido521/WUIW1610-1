const emitter = require('events');
var util=require('util');
function person(name,age) {
    this.name=name;
    this.age=age;
}
// 继承
util.inherits(person,emitter);

var xy=new person('小雨',19);
// on添加事件
xy.on('say',aa);
function aa() {
    console.log(this.name);
}
xy.on('say',function () {
    console.log(this.age);
})
// 触发事件
// xy.emit('say');

// 移除所有事件
//removeAllListeners(eventName) 		移除全部或指定 eventName 的监听器。
xy.removeAllListeners('say');
xy.emit('say');