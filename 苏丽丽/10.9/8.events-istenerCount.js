var emitter = require("events");
var util=require("util");
function person(name){
    this.name=name
}
util.inherits(person,emitter);
var xhr= new person('小红');

//设计模式  订阅/发布模式
//定义事件
xhr.addListener('say',function(){  //触发say事件
    console.log(this.name);
})
xhr.addListener('say',function(){  //触发say事件
    console.log(this.name);
})
xhr.addListener('say',function(){  //触发say事件
    console.log(this.name);
})
xhr.addListener('say',function(){  //触发say事件
    console.log(this.name);
})
xhr.addListener('say',function(){  //触发say事件
    console.log(this.name);
})
xhr.addListener('say',function(){  //触发say事件
    console.log(this.name);
})
xhr.addListener('say',function(){  //触发say事件
    console.log(this.name);
})
xhr.addListener('say',function(){  //触发say事件
    console.log(this.name);
})
xhr.addListener('say',function(){  //触发say事件
    console.log(this.name);
})
//调用触发事件
xhr.emit('say');
console.log(xhr.listenerCount('say'));//输出数组数量
