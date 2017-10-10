/**
 * Created by Administrator on 2017/10/9 0009.
 */

var emitter =  require("events");
var util =  require("util");
function person(name,age){
    this.name = name;
    this.age = age;
}
util.inherits(person,emitter);

var xh = new person('差不多','20');    //创建对象

xh.setMaxListeners(12);


xh.on('say',function(){
    console.log( this.name)
})

xh.on('say',function(){
    console.log( this.age)
})
xh.on('say',function(){
    console.log( 1)
})

xh.on('say',function(){
    console.log( 2)
})

xh.on('say',function(){
    console.log( 3)
})
xh.on('say',function(){
    console.log( 4)
})

xh.on('say',function(){
    console.log( 5)
})

xh.on('say',function(){
    console.log( 6)
})
xh.on('say',function(){
    console.log( 7)
})

xh.on('say',function(){
    console.log( 8)
})

xh.on('say',function(){
    console.log( 9)
})
xh.on('say',function(){
    console.log( 10)
})


xh.emit('say');
console.log(xh.listeners('say'));
console.log(xh.listeners('say').length);
console.log(xh.listenerCount('say'));
