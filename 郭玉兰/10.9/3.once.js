//once(event, listener)
// 为指定事件注册一个单次监听器，
var emitter = require("events");
var util=require("util");
function person(name){
    this.name=name
}
util.inherits(person,emitter);
var xhr= new person('小红');

//设计模式  订阅/发布模式
//定义事件
xhr.once('say',function(){  //触发say事件
    console.log(this.name);
})
xhr.once('change',function(name){  //触发change事件  改名
    this.name=name;
})
//调用触发事件
xhr.emit('say');  //只出现一次
xhr.emit('change',"小花");
xhr.emit('say');
