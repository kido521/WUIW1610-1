var emitter = require("events");
var util = require("util");
function person(name){
    this.name = name;
}
util.inherits(person,emitter);
var xh = new person('xiaohong');

//设计模式  订阅/发布模式
// 是一套被反复使用
//为了代码可重复性
//绑定事件
xh.addListener('say',function(){
    console.log(this.name);
})

xh.addListener('change',function(name){//定义事件
    this.name = name;
})

//触发事件 可触发无数次
xh.emit('change','abc');//可给回调函数传参数

xh.emit('say');
xh.emit('say');