var EventEmitter=require('events');
var util = require('util');
function person(name,age){
    this.name = name;
    this.age=age;
}
util.inherits(person,EventEmitter);

var xh=new person('小红',19);

// 设计模式 订阅/发布模式


// 定义事件 say
xh.addListener('say',function () {
    console.log(this.name);
})

//触发事件 say
xh.emit('say');

// 定义事件 change
xh.addListener('change',function () {
    this.name='aa';
})

//触发事件 change
xh.emit('change');
xh.emit('say');
