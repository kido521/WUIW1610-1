var emitter = require("events");
var util = require("util");
function person(name,age){
    this.name = name;
    this.age = age;
}
util.inherits(person,emitter);
var xh = new person('xiaohong','100');

//设计模式  订阅/发布模式
// 是一套被反复使用
//为了代码可重复性
//绑定事件
xh.on('say',function(){
    console.log(this.name);
});
xh.on('say',function(){
    console.log(this.age);
});
xh.emit('say');