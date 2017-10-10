var emitter = require("events");
var util = require("util");
function person(name,age){
    this.name = name;
    this.age = age;
}
util.inherits(person,emitter);

var xh = new person('小明',22);

xh.addListener('say',function(){
    console.log(this.name);
})
xh.addListener('say',function(){
    console.log(this.age);
})
xh.addListener('say',function(){
    console.log("这位同学的名字是"+this.name+"，他今年"+this.age+"岁了。");
})

xh.emit('say');
