const emitter=require('events');
var util=require('util');
function person(name){
    this.name=name;
}
util.inherits(person,emitter);
var xh=new person("小红");
// 设计模式  订阅/发布模式
// 添加事件 say
xh.addListener('say',function(){
    console.log(this.name);
});
// 添加事件 change
xh.addListener('change',function(name){
   this.name=name;
});
// 触发事件
xh.emit('change','aaa');
xh.emit('say');


