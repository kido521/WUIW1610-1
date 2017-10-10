// removeListener(event, listener)
// 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器
var emitter = require("events");
var util=require("util");
function person(name,age){
    this.name=name,
        this.age=age;
}
util.inherits(person,emitter);
var xhr= new person('小红',19);

xhr.on('say',function(){  //触发say事件
    console.log(this.name);
})
xhr.on('say',function(){  //触发change事件  改名
    console.log(this.age);
})
function aa(){
    console.log(this.name);
}
xhr.on('say',aa);//第一次调用 aa-小红
xhr.removeListener('say',aa);
xhr.emit('say');//第二次调用 移除aa
