// 订阅/发布模式

const emitter = require('events');
var util=require('util');
function person(name) {
    this.name=name;
}
// 继承
util.inherits(person,emitter);

var xy=new person('小雨');
// addListener 添加事件
xy.addListener('say',function () {
    console.log(this.name);
})
xy.addListener('change',function (name) {
    this.name=name;
})
// emit 触发事件(可触发N次)
// xy.emit('change',"小王");

xy.emit('say');
