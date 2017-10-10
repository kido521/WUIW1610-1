var emmiter = require("events");
// console.log(emmiter);
var util = require("util");
function person(){
    this.name = "小红";
}
util.inherits(person,emmiter);
var xh = new person("小红");
xh.once("say",function(){
    console.log(this.name);
})
xh.emit('say');    //小红 //使用once,该事件只会被调用一次
xh.emit('say');    //没有输出
xh.emit('say');