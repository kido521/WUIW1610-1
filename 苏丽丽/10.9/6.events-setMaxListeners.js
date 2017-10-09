var emitter = require("events");
var util=require("util");
function person(name){
    this.name=name
}
util.inherits(person,emitter);

var xhr= new person('小红');

xhr.setMaxListeners(16);//---------------------
// setMaxListeners(n)
//默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。
// setMaxListeners 函数用于提高监听器的默认限制的数量。

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
xhr.addListener('say',function(){  //触发say事件
    console.log(this.name);
})
xhr.addListener('say',function(){  //触发say事件
    console.log(this.name);
})

//调用触发事件
// xhr.emit('change',"小花");
// xhr.emit('say');//可多次绑定
xhr.emit('say',);
