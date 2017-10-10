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
xy.on('say',aa);
    function aa() {
        console.log(this.name);
    }
xy.on('say',function () {
    console.log(this.age);
})
// 触发事件
xy.emit('say');

// 移除事件aa
xy.removeListener('say',aa);
xy.emit('say');