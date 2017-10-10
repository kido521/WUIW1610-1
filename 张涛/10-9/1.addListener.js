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
//     设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。
//     这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。
//     设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。
//  订阅(即定义)/发布(即调用)模式

// 定义事件 say
xh.addListener("say",function () {
    console.log(this.name);
})
xh.addListener("say",function () {
    console.log(this.age);
})
// 触发事件 say
// xh.emit("say");
// xh.emit("say");
xh.emit("say");

// 定义事件 change
xh.addListener("change",function () {
    this.name = "大米"
})
// 触发事件 change
xh.emit("change");
xh.emit("change","米饭");

