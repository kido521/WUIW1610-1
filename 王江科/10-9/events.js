var emitter = require("events");
var util = require("util");
function person(name,age){
    this.name = name;
    this.age= age;
}
util.inherits(person,emitter);

//1.addListener/on  事件监听
// var xh = new person("小红");
// xh.addListener("say",function(){
//     console.log(this.name);
// })
// xh.emit("say");

// var xh = new person("小红",21);
// xh.addListener("say",function(){
//     console.log(this.name);
// })
// xh.addListener("say",function(){
//     console.log(this.age);
// })
// xh.addListener("change",function(name){
//     this.name = name;
//     console.log(this.name);
// })
// xh.emit("say");
// xh.emit("change","小明");


//2.once  绑定一次
// var xh = new person("小红",21);
// xh.once("say",function(){
//     console.log(this.name);
// })
// xh.emit("say");
// xh.emit("say");


//3.removeListener  移除绑定事件
// var xh = new person("小红",21);
// function aa(){
//     console.log(this.name);
// }
// function bb(){
//     console.log(this.age);
// }
// xh.on("say",aa);
// xh.on("say",bb);
// xh.emit("say");
// xh.removeListener("say",aa)
// xh.emit("say");


//4.removeAllListeners  移除所有绑定事件
// var xh = new person("小红",21);
// function aa(){
//     console.log(this.name);
// }
// function bb(){
//     console.log(this.age);
// }
// xh.on("say",aa);
// xh.on("say",bb);
// xh.on("change",aa);
// xh.emit("say");
// // xh.removeAllListeners();
// xh.removeAllListeners("say");
// xh.emit("change");


//5.setMaxListener  限制数量
// var xh = new person("小红",12);
// xh.setMaxListeners(10);
// xh.on("say",function(){
//     console.log(1);
// })
// xh.on("say",function(){
//     console.log(2);
// })
// xh.on("say",function(){
//     console.log(3);
// })
// xh.on("say",function(){
//     console.log(4);
// })
// xh.on("say",function(){
//     console.log(5);
// })
// xh.emit("say");


//6.listener  返回指定事件的监听器数组
var xh = new person("小红",12);
xh.on("say",function(){
    console.log(1);
})
xh.on("say",function(){
    console.log(2);
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
console.log(xh.listeners("say"));
console.log(xh.listeners("say").length);

//7.listenerCount  返回指定监听器数量
// console.log(xh.listenerCount("say"));