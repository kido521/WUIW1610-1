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
//绑定事件
//（设计模式）
//addListenter  属于订阅/发布模式
    //事件1 say
xh.addListener('say',function(){
    console.log( this.name)
})
    //事件2 change
xh.addListener('change',function(name){
    this.name = name;
})

//触发事件
xh.emit('change',"大头");    //可多次触发绑定的事件
xh.emit('say');    //可多次触发绑定的事件