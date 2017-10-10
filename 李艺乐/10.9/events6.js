var emitter = require("events");
var util = require("util");
function person(name,age){
    this.name = name;
    this.age = age;
}
util.inherits(person,emitter);
var xh = new person('xiaohong','100');
xh.setMaxListeners(20);
xh.addListener('say',function(){
    console.log(1);
});
xh.addListener('say',function(){
    console.log(2);
});
xh.addListener('say',function(){
    console.log(3);
});
xh.addListener('say',function(){
    console.log(4);
});
xh.addListener('say',function(){
    console.log(5);
});
xh.addListener('say',function(){
    console.log(6);
});
xh.addListener('say',function(){
    console.log(7);
});
xh.addListener('say',function(){
    console.log(8);
});
xh.addListener('say',function(){
    console.log(9);
});
xh.addListener('say',function(){
    console.log(10);
});
xh.addListener('say',function(){
    console.log(11);
});
xh.addListener('say',function(){
    console.log(12);
});
xh.emit('say');
