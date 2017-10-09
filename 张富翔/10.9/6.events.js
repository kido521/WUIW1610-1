var emitter =require("events");
var util =require("util");
function person(name,age) {
    this.name=name;
}
util.inherits(person,emitter);

var xh=new person('小红');

xh.addListener('say',function(){
    console.log(0);
})
xh.addListener('say',function(){
    console.log(0);
})
xh.addListener('say',function(){
    console.log(1);
})
xh.addListener('say',function(){
    console.log(2);
})
xh.addListener('say',function(){
    console.log(3);
})
xh.addListener('say',function(){
    console.log(4);
})
xh.addListener('say',function(){
    console.log(5);
})

xh.emit('say');
console.log(xh.listeners('say').length);