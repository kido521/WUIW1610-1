var emitter = require("events");
var util=require("util");
function person(name,age){
    this.name=name,
        this.age=age;
}
util.inherits(person,emitter);

var xhr= new person('小红',19);

//设计模式  订阅/发布模式
//定义事件
xhr.addListener('say',function(){  //触发say事件
    console.log(this.name);
})
xhr.addListener('say',function(){  //触发change事件  改名
    console.log(this.age);
})
xhr.addListener('say',function(){  //触发change事件  改名
    console.log('她叫'+this.name+',今年'+this.age);
})
xhr.emit('say');
