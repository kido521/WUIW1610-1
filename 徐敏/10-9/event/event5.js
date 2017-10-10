/**
 * Created by Administrator on 2017/10/9 0009.
 */

var emitter =  require("events");
var util =  require("util");
function person(name){
    this.name = name;
}
util.inherits(person,emitter);

var xh = new person('差不多');    //创建对象

// 事件绑定。 once   只有一次
xh.once('say',function(){
    console.log( this.name)
})

xh.emit('say');
xh.emit('say');
xh.emit('say');