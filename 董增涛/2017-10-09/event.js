// node.js基于事件驱动

var emitter =  require("events");

class MyEmitter extends emitter {};

const myEmitter = new MyEmitter();

myEmitter.name = "xiaohong";

myEmitter.age = 18;

function say(){
    console.log('触发了一个事件！');
}

//定义事件绑定事件 同一事件名称可以绑定多个事件且该事件名称被触发一次后所绑定的所有事件都会依次调用 可以给事件加参调用指定的事件
myEmitter.on('event',say);

myEmitter.on('showname',function(){
    console.log(this.name);
});

myEmitter.on('showage',function(){
    console.log(this.age);
});

myEmitter.on('showlike',function(){
    console.log('苹果');
});

myEmitter.on('showlike',function(){
    console.log('香蕉');
},"b");

//移除事件 移除事件后该事件便不会再触发 移除所有事件 removeall
myEmitter.removeListener('event',say);

//触发事件
myEmitter.emit('event');

myEmitter.emit('showname');

myEmitter.emit('showage');

myEmitter.emit('showlike');

myEmitter.emit('showlike','b');

//添加单次监听事件 在事件触发的时候只触发第一次 之后的不会再触发
myEmitter.once('greet',function(){
    console.log('hello');
});

myEmitter.emit('greet');

myEmitter.emit('greet');

myEmitter.emit('greet');