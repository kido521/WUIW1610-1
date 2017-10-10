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
xy.on('say',function () {
    console.log(this.name);
})
xy.on('say',function () {
    console.log(this.age);
})
xy.on('say',function () {
    console.log(this.age);
})

// .listenerCount(eventName) 				返回正在监听名为 eventName 的事件的监听器的数量。
// console.log(xy.setMaxListeners(11)); 设置事件监听器的最大数量 默认是10（超过10个会发出警告）
console.log(xy.listeners('say'));  //[ [Function], [Function], [Function] ]
console.log(xy.listenerCount('say'));  //3
