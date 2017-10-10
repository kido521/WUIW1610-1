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

//事件绑定  on
xh.on('say',function(){
    console.log( this.name)
})

xh.on('say',function(){
    console.log( this.age)
})
xh.emit('say');