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
xh.on("say",function(){
    console.log(222);
})
xh.emit('say');