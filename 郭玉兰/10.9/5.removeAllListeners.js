// removeAllListeners([event])
// 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
var emitter = require("events");
var util=require("util");
function person(name){
    this.name=name
}
util.inherits(person,emitter);
var xhr= new person('小红');
xhr.addListener('say',function(){  //触发say事件
    console.log(this.name);
})

xhr.removeAllListeners('say'); //移除say方法
xhr.emit('say');