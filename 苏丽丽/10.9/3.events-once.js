var emitter = require("events");
var util=require("util");
function person(name){
    this.name=name,
    this.name=age;
}
util.inherits(person,emitter);

var xhr= new person('小红,19');

//设计模式  订阅/发布模式
//定义事件
xhr.once('say',function(){  //触发say事件
    console.log(this.name);
})
xhr.once('say',function(){  //触发change事件  改名
    console.log(this.age);
})
//调用触发事件
xhr.emit('say');//只能绑定一次
