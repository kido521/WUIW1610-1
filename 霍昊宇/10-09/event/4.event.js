//测试移除

var emitter = require('events')
// console.log(emitter) //返回的结果为对象
var util =require('util') //工具函数

function person(name,age){
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter)

var xh= new person('小红',19)

function aa() {
    console.log(this.name);
}

function bb() {
    console.log(this.age);
}


// 触发事件
xh.on('say',aa);
xh.on('say',bb);
xh.emit('say');
xh.removeListener('say',aa)
xh.emit('say');
xh.removeAllListeners('say')  //删除全部
xh.emit('say');