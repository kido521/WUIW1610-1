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
function aa(){
    console.log("小乖");
}
xh.addListener("change",aa)
xh.emit("say");
xh.removeListener("change",aa);
xh.emit("change");