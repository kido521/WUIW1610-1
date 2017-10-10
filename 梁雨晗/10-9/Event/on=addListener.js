const emitter = require('events');
var util=require('util');
function person(name,age) {
    this.name=name;
    this.age=age;
}
// 继承
util.inherits(person,emitter);

var xy=new person('小雨',19);
// addListener 添加事件
xy.addListener('say',function () {
    console.log(this.name);
})
xy.addListener('say',function () {
    console.log(this.age);
})
// 触发事件
xy.emit('say');
xy.emit('say');