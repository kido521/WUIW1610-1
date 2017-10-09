const emitter = require('events');
var util=require('util');
function person(name,age) {
    this.name=name;
    this.age=age;
}
// 继承
util.inherits(person,emitter);

var xy=new person('小雨',19);
// once添加事件  只能被触发一次
xy.once('say',function () {
    console.log(this.name);
})
xy.once('say',function () {
    console.log(this.age);
})
// 触发事件
xy.emit('say');
xy.emit('say');