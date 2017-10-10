var emitter = require('events');
// console.log(emitter);
var util=require('util');
function person(name){
    this.name=name;
}
util.inherits(person,emitter);
var xh = new person('小红');

//设计模式 订阅/发布模式
//设计模式：代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。
xh.addListener('say',function () {  //绑定事件
    console.log(this.name)
})
xh.emit('say'); //触发事件



