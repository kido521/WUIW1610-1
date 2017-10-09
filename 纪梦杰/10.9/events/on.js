var EventEmitter=require('events');
var util = require('util');
function person(name,age){
    this.name = name;
    this.age=age;
}
util.inherits(person,EventEmitter);

var xh=new person('小红',19);

// 定义事件 say
xh.on('say',function () {
    console.log(this.name);
})

//触发事件 say
xh.emit('say');

// 定义事件 change
xh.on('change',function () {
    this.name='aa';
})

//触发事件 change
xh.emit('change');
xh.emit('say');
