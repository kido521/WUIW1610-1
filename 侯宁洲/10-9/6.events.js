var emitter = require("events");
var util = require("util");
function person(name,age){
    this.name = name;
    this.age = age;
}
util.inherits(person,emitter);

var xh = new person('小红',19);
xh.setMaxListeners(15);
xh.addListener('say',function(){
    console.log(this.name)
})
xh.addListener('say',function(){
    console.log(this.age)
})

xh.addListener('say',function(){
    console.log('她叫'+this.name+'，今年'+this.age);
})
xh.addListener('say',function(){
    console.log(4444)
})
xh.addListener('say',function(){
    console.log(5555)
})
xh.addListener('say',function(){
    console.log(6666)
})
xh.addListener('say',function(){
    console.log(7777)
})
xh.addListener('say',function(){
    console.log(8888)
})
xh.addListener('say',function(){
    console.log(99999999)
})
xh.addListener('say',function(){
    console.log(10)
})

xh.emit('say')

console.log(xh.listeners('say'))
console.log(xh.listeners('say').length)
console.log(xh.listenerCount("say"))

