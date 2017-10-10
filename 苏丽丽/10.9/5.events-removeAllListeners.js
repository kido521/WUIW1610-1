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
xhr.on('change',function(){  //触发change事件  改名
    console.log(this.age);
})
//移除removeAllListeners-所有
xhr.on('say',function(){
    this.name=name;
});
xhr.removeAllListeners('say');   //移除--指定函数
xhr.emit('say');
xhr.emit('change');
