var emitter = require('events');
var util = require('util');
function person(name,age) {
    this.name = name;
    this.age=age;
}
util.inherits(person,emitter);

var xh = new person('小米',19);

xh.setMaxListeners(10);
xh.on('say',function () {
    console.log(this.name);
})
xh.on('say',function () {
    console.log(this.age);
})
xh.on('say',function () {
    console.log(3);
})
xh.on('say',function () {
    console.log(4);
})
xh.on('say',function () {
    console.log(5);
})
xh.on('say',function () {
    console.log(6);
})
xh.on('say',function () {
    console.log(7);
})
xh.on('say',function () {
    console.log(8);
})
xh.on('say',function () {
    console.log(9);
})
xh.on('say',function () {
    console.log(10);
})

xh.emit('say');
console.log(xh.listeners('say'));//返回指定事件的监听器数组
console.log(xh.listenerCount('say'))//返回指定事件的监听器数量
