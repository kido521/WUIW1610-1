var emitter = require('events');
var util = require('util');
function person(name,age) {
    this.name = name;
    this.age=age;
}
util.inherits(person,emitter);

// 设计模式  订阅/发布模式

var xh = new person('小米',19);
xh.addListener('say',function () {
    console.log(this.name);
})
// xh.once('say',function () {
//     console.log(this.name);
// })//为指定事件注册一个单次监听器，只会触发一次，触发后立即解除
xh.emit('say');
xh.emit('say');
xh.emit('say');