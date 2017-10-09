var emmiter = require("events");
// console.log(emmiter);
var util = require("util");
function person(){
    this.name = "小红";
}
util.inherits(person,emmiter);
var xh = new person("小红");
xh.setMaxListeners(15);     //设置事件的最大绑定数量
xh.on("say",function(){
    console.log(this.name);
})
xh.on("say",function(){
    console.log(19);
})
xh.on("say",function(){
    console.log(3);
})
xh.on("say",function(){
    console.log(4);
})
xh.on("say",function(){
    console.log(5);
})
xh.on("say",function(){
    console.log(6);
})
xh.on("say",function(){
    console.log(7);
})
xh.on("say",function(){
    console.log(8);
})
xh.on("say",function(){
    console.log(9);
})
xh.on("say",function(){
    console.log(10);
})
xh.on("say",function(){
    console.log(11);
})
xh.emit('say');