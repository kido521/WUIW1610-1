//测试

var emitter = require('events')
// console.log(emitter) //返回的结果为对象
var util =require('util') //工具函数

function person(name,age){
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter)

var xh= new person('小红',19)


// 绑定事件
// on和addListener效果一样
xh.on('say',function () {
    console.log(this.name)
})

xh.on('say',function () {
    console.log(this.age)
})


// 触发事件
xh.emit('say');
