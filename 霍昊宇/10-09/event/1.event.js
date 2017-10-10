//基本测试

var emitter = require('events')
// console.log(emitter) //返回的结果为对象
var util =require('util') //工具函数

function person(name){
    this.name=name;
}
util.inherits(person,emitter)

var xh= new person('小红')


// 绑定事件
// on和addListener效果一样
xh.addListener('say',function () {
    console.log(this.name)
})
xh.on('change',function (name) {
    this.name=name;
})

// 触发事件
xh.emit('say')
xh.emit('change','qq')
xh.emit('say')
xh.emit('change','bb')
xh.emit('say')