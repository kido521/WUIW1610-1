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

var xh = new person('差不多',18);    //创建对象
function aa(){
    console.log( this.name)
}
function bb(){
    console.log( this.age)
}
xh.on('change',function(name){
    this.name = name;
})
xh.on('say',aa)
xh.on('say',bb)


xh.emit('change',"大头");
xh.emit('say');


//移除所有事件
xh.removeAllListeners();
xh.emit('change',"大头");
xh.emit('say');


