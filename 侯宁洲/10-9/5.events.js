var emitter = require("events");
var util = require("util");
function person(name,age){
    this.name = name;
    this.age = age;
}
util.inherits(person,emitter);

var xh = new person('小红',19);

// xh.once('say',function(){
//     console.log(this.name)
// })
function aa(){
    console.log(this.name)
}
xh.on('say',aa)
xh.on("say",bb)
function bb(){
    console.log(this.age)
}

xh.on('change',function(name){
    this.name = name;
    console.log('已经修改')
})
xh.removeAllListeners('say');
xh.emit('change','张三');
xh.emit('say')

