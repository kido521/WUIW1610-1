var EventEmitter=require('events');
var util = require('util');
function person(name,age){
    this.name = name;
    this.age=age;
}
util.inherits(person,EventEmitter);

var xh=new person('小红',19);

xh.setMaxListeners(11);

xh.addListener('say',function () {
    console.log(this.name);
})
xh.addListener('say',function () {
    console.log(this.age);
})
xh.addListener('say',function () {
    console.log('她叫'+this.name+',今年'+this.age);
})
xh.addListener('say',function () {
    console.log('aa');
})
xh.addListener('say',function () {
    console.log('bb');
})
xh.addListener('say',function () {
    console.log('cc');
})
xh.addListener('say',function () {
    console.log('dd');
})
xh.addListener('say',function () {
    console.log('ee');
})
xh.addListener('say',function () {
    console.log('ff');
})
xh.addListener('say',function () {
    console.log('gg');
})
xh.addListener('say',function () {
    console.log('hh');
})


xh.emit('say');
console.log(xh.emit('say'));  //按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false
console.log(xh.listeners('say'));  //返回指定事件的监听器数组
console.log(xh.listenerCount('say'));  //返回指定事件的监听器数量