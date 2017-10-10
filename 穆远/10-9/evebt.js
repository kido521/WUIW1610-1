var emitter = require('events');

function event(name,age){
    this.name = name;
    this.age = age;
}
var util = require('util');


util.inherits(event,emitter);

var xh = new event('小红',19);

xh.addListener('say',function () {
    console.log(this.name);
});

xh.addListener('say',function () {
    console.log(this.age);
});

xh.emit('say');

xh.on('eventss',function (name) {
    console.log(name);
});

xh.emit('eventss','李四');

xh.on('lists',function (str1,str2) {
   console.log(str1);
});
xh.on('lists',function (str1,str2) {
    console.log(str2);
});

xh.emit('lists','abc','123');

xh.once('says',function () {
    var num = 1;
   for(var i=0;i<5;i++){
       num+=1;
   }
   console.log(num);
});

xh.emit('says');
xh.emit('says');//只输出一次6;

// |removeListener(event, listener)|移除指定事件的某个监听器，监听器 必须是该事件已经注册过的监听器。|

function functionName() {
    console.log('小黄人');
}

xh.on('funNa',functionName);
xh.emit('funNa');

// xh.removeListener('funNa',functionName);
xh.emit('funNa');//本次调用已移除;



for(var i=0;i<15;i++){

    xh.emit('funNa');

}
//调用次数超过十次，出现警告//
//
xh.setMaxListeners(25);

var sa = xh.listeners('funNa').length;//返回指定事件的监听器数组
console.log(sa);















