var emmiter = require("events");
// console.log(emmiter);
var util = require("util");
function person(){
    this.name = "小红";
}
util.inherits(person,emmiter);
var xh = new person("小红");
xh.on("say",function(){
    console.log(this.name);
})
xh.on("say",function(){
    console.log(19);
})
// 绑定change事件
xh.addListener("change",function(name){
    console.log("小乖");
})
// xh.removeAllListeners();     //移除所有的事件
xh.removeAllListeners("say");   //移除指定事件
xh.emit('say');
xh.emit('change');