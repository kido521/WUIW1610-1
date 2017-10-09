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
xhr.on('say',aa);//第一次调用 aa-小红   //也可以在里面写个function
xhr.removeListener('say',aa);   //移除  定义名字-指定移除
xhr.emit('say');//第二次调用 移除aa
