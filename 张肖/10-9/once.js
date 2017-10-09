var  emitter=require("events");
var util=require("util")
// console.log(emitter)   //返回一个对象
function person(name,age){
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);//第一个参数是谁继承   第二个参数：继承谁
var xh =new person('小红',"19");


// ***************once只处理事件一次************

// xh.once('say',function () {
//     console.log(this.name)
//
// })

// **********移除事件**********
// function aa() {
//     console.log(this.name)
//
// }
// xh.on("say",aa);
// xh.emit('say');
//
// // 移除事件  事件一出每一只能移除一个事件
// xh.removeListener("say",aa);
// xh.emit('say');

// *************************移除所有的事件跟监听器********************
// xh.addListener('say',function () {  //addListener定义say事件
//     console.log(this.name)
//     console.log(this.age)
//
// })
// xh.addListener('change',function () {  //addListener定义say事件
//     this.name="高瀚宇";
//     console.log(this.name)
//
// })
// xh.removeAllListeners("change");
// xh.removeAllListeners("say");
// xh.emit("say");
// xh.emit("change","高瀚宇");

// *********************最大监听数************
xh.on("say",function () {
    console.log(1)

})
xh.on("say",function () {
    console.log(2)

})
xh.on("say",function () {
    console.log(3)

})
xh.on("say",function () {
    console.log(4)

})
xh.on("say",function () {
    console.log(5)

})
xh.on("say",function () {
    console.log(6)

})
xh.on("say",function () {
    console.log(7)

})
xh.on("say",function () {
    console.log(8)

})
xh.on("say",function () {
    console.log(9)

})
xh.on("say",function () {
    console.log(10)

})
xh.on("say",function () {
    console.log(11)

})
xh.on("say",function () {
    console.log(12)

})
// console.log(xh.setMaxListeners(11))

// ***************返回指定事件的监听器的数组**********************
//     console.log(xh.listeners("say"));

// ***********************返回正在监听名为 eventName 的事件的监听器的数量*********
    console.log(xh.listenerCount("say"));