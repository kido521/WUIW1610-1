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

xh.addListener('say',function () {
    console.log(1)
})
xh.addListener('say',function () {
    console.log(2)
})
xh.addListener('say',function () {
    console.log(3)
})
xh.addListener('say',function () {
    console.log(4)
})
xh.addListener('say',function () {
    console.log(5)
})

// 触发事件
xh.emit('say')
console.log(xh.listeners('say'));
console.log(xh.listeners('say').length);