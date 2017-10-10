// addListener(event, listener)
// 为指定事件添加一个监听器到监听器数组的尾部。
var emitter = require("events");
var util=require("util");
function person(name){
    this.name=name
}
util.inherits(person,emitter);

var xhr= new person('小红');
//设计模式  订阅/发布模式
//定义事件
xhr.addListener('say',function(){ //触发say事件
    console.log(this.name);
})
xhr.addListener('change',function(name){  //触发change事件  改名
    this.name=name;
})
//调用触发事件
xhr.emit('say');
xhr.emit('change',"小李");
xhr.emit('say');

