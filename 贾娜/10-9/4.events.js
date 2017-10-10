const emitter=require('events');
var util=require('util');
function person(name){
    this.name=name;
}
util.inherits(person,emitter);
var xh=new person("小红");
// 设计模式  订阅/发布模式
// 添加事件 say  事件只会触发一次
// xh.once('say',function(){
//     console.log(this.name);
// });
function aa(){
    console.log(this.name);
}
xh.on('say',aa);

// 触发事件

xh.emit('say');
// removeListener  移除事件和监听器  removeAllListener  移除对象上所有事件和监听器
xh.removeListener('say',aa);
xh.emit('say');