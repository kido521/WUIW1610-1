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
function aa(){
    console.log( this.name)
}
xh.on('say',aa)
xh.emit('say');

//移除一个事件，事件处理函数必须有自己的函数名，才可以移除
xh.removeListener('say',aa)
xh.emit('say');


