var emitter = require("events");
// console.log(emitter)//返回一个对象
var  util = require("util");

//写一个构造函数
// function person(name){
//     this.name = name;
// }
// //继承
// util.inherits(person,emitter);
//
// var xh = new person("王五");
// //设计模式   订阅/发布模式
// //定义事件，事件监听
// xh.addListener('say',function(){
//     console.log(this.name);
// })
//
// xh.addListener('change',function(name){
//     this.name = name;
// })
// //触发事件
// xh.emit('change');
// xh.emit('change','qwe');
// xh.emit('say');



//设计模式   订阅/发布模式
// function person(name,age){
//     this.name = name;
//     this.age = age;
// }
// //继承
// util.inherits(person,emitter);
//
// var xh = new person("王五",12);
// //设计模式   订阅/发布模式
// //定义事件，事件监听
// xh.addListener('say',function(){
//     console.log(this.name);
// })
//
// xh.addListener('say',function(){
//     console.log(this.age);
// })
// xh.emit('say');


//on方法 和 addListener一样
// function person(name,age){
//     this.name = name;
//     this.age = age;
// }
// //继承
// util.inherits(person,emitter);
// var xh = new person("王五",15);
// //设计模式   订阅/发布模式
// //定义事件，事件监听
// xh.on('say',function(){
//     console.log(this.name);
// })
//
// xh.on('say',function(){
//     console.log(this.age);
// })
// xh.emit('say');

//once只会只会绑定一次
// function person(name,age){
//     this.name = name;
//     this.age = age;
// }
// //继承
// util.inherits(person,emitter);
// var xh = new person("王五",16);
// //定义事件，事件监听
// xh.once('say',function(){
//     console.log(this.name);
// })
// xh.emit('say');
// xh.emit('say');



// removeListener()移除
function person(name,age){
    this.name = name;
    this.age = age;
}
//继承
util.inherits(person,emitter);
var xh = new person("王五",16);
//定义事件，事件监听
var aa = function () {
    console.log(this.name);
}
xh.on('say',aa)

 xh.emit('say');
xh.removeListener('say',aa);
xh.emit('say');

//setMaxListeners
// function person(name,age){
//     this.name = name;
//     this.age = age;
// }
// //继承
// util.inherits(person,emitter);
// var xh = new person("王五",16);
// //定义事件，事件监听
// xh.setMaxListeners(15);
// xh.on('say',function (){
//     console.log(this.name);
// })
//
// xh.on('say',function (){
//     console.log(this.age);
// })
//
// xh.on('say',function (){
//     console.log(3);
// })
// xh.on('say',function (){
//     console.log(4);
// })
// xh.on('say',function (){
//     console.log(5);
// })
// xh.on('say',function (){
//     console.log(6);
// })
// xh.on('say',function (){
//     console.log(7);
// })
// xh.on('say',function (){
//     console.log(8);
// })
// xh.on('say',function (){
//     console.log(9);
// })
// xh.on('say',function (){
//     console.log(10);
// })
// xh.on('say',function (){
//     console.log(11);
// })
// xh.on('say',function (){
//     console.log(12);
// })
//
// xh.emit('say');


// listeners
// function person(name,age){
//     this.name = name;
//     this.age = age;
// }
//继承
// util.inherits(person,emitter);
// var xh = new person("王五",16);
// //定义事件，事件监听
// xh.setMaxListeners(15);
// xh.on('say',function (){
//     console.log(this.name);
// })
//
// xh.on('say',function (){
//     console.log(this.age);
// })
//
// xh.on('say',function (){
//     console.log(3);
// })
// xh.on('say',function (){
//     console.log(4);
// })
// xh.on('say',function (){
//     console.log(5);
// })
// xh.on('say',function (){
//     console.log(6);
// })
// xh.on('say',function (){
//     console.log(7);
// })
// xh.on('say',function (){
//     console.log(8);
// })
// xh.on('say',function (){
//     console.log(9);
// })
// xh.on('say',function (){
//     console.log(10);
// })
// xh.on('say',function (){
//     console.log(11);
// })
// xh.on('say',function (){
//     console.log(12);
// })
//
//  // xh.emit('say');
// console.log(xh.listeners('say'));


