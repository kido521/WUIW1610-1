// setMaxListeners（）   设置最大监听数量
// listeners （）  返回指定事件的监听数组
// listenersCount()   返回指定事件的监听数组长度
const emitter=require('events');
var util=require('util');
function person(name,age){
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);
var xh=new person("小红",19);
// 设置最大监听数量
xh.setMaxListeners(15);
xh.addListener('say',function(){
    console.log(this.name);
});
xh.addListener('say',function(){
    console.log(this.age);
});
xh.addListener('say',function(){
    console.log(this.name+'----'+this.age);
});
xh.addListener('say',function(){
    console.log(4444);
});
xh.addListener('say',function(){
    console.log(5);
});
xh.addListener('say',function(){
    console.log(6);
});
xh.addListener('say',function(){
    console.log(7);
});
xh.addListener('say',function(){
    console.log(8);
});
xh.addListener('say',function(){
    console.log(9);
});
xh.addListener('say',function(){
    console.log(10);
});
xh.addListener('say',function(){
    console.log(11);
});
xh.addListener('say',function(){
    console.log(12);
});
// 返回指定事件的监听数组
console.log(xh.listeners('say'));
// 返回指定事件的监听数组长度
console.log(xh.listenerCount('say'));