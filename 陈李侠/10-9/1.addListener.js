var emmiter = require("events");
// console.log(emmiter);
var util = require("util");
function person(name){
    this.name = name;
}
util.inherits(person,emmiter);
var xh = new person("小红");
// 绑定say事件
xh.addListener("say",function(){
    console.log(this.name);
})
// 绑定change事件
xh.addListener("change",function(name){
    this.name = name;
})
xh.emit("change","小乖");
xh.emit("say");