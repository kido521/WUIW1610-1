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
var callback = function() {
    console.log(this.age);
}

xh.on("say",callback)
// 触发事件 say



xh.emit("say");
xh.removeListener("say",callback);
xh.emit("say");

