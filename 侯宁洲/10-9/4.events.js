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

xh.emit('say')
xh.removeListener('say',aa);
xh.removeListener('say',bb)
xh.emit('say')