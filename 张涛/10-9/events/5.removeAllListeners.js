var emitter = require("events");
// console.log(emitter);

var util = require("util");

function person(name,age) {
    this.name = name;
    this.age = age;

}

util.inherits(person,emitter);

var xh = new person ("小米",19);

// 设计模式
//  订阅(即定义)/发布(即调用)模式

// 定义事件 say
xh.on("say",function () {
    console.log(this.name);
})
xh.on("age",callback)

// 触发事件 say

function callback () {
    console.log(this.age);
}

xh.emit("say");
xh.emit("age");
// xh.removeAllListeners();//移除所有事件的所有监听器
xh.removeAllListeners("age");//移除指定事件的所有监听器
xh.emit("say");
xh.emit("age");
