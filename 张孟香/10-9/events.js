const emitter=require('events');
const util=require('util');


function person(name,age){
    this.name=name;
    this.age=age;
}
//让person 继承emitter上的方法
util.inherits(person, emitter);

var xh=new person('小小',17);


//************************************************
//添加监听事件 addListener/on
//1。addListener

xh.addListener('say',function(name){
    console.log('名字：'+this.name)
});
xh.addListener('say',function(name,age){
    console.log('名字：'+this.name+'，年龄：'+this.age+'岁')
});
//xh.addListener('change',function(){
//    console.log(this.name)
//});
//
//xh.addListener('change',function(name,age){
//    this.name=name;
//    this.age=age;
//});

//2.on

//xh.on('say',function(name,age){
//    console.log('名字：'+this.name+'，年龄：'+this.age+'岁')
//});
//
//xh.on('change',function(){
//    console.log(this.name)
//});
//

var fn=function(name,age){
    this.name=name;
    this.age=age;
    console.log(1)
}
xh.on('change',fn);



//*************************************************
//移除指定的监听器中的监听事件
//xh.removeListener('change',fn);

//移除所有的监听器
//xh.removeAllListeners();
//移除指定的监听器
//xh.removeAllListeners('say')


//************************************************
//设置监听器的最大数量，默认情况下为10
// xh.setMaxListener(12);


//*************************************************
//返回指定监听器的函数数组
//console.log(xh.listeners('say'))


//返回指定监听器的函数个数
//console.log(xh.listenerCount('say'))


//*************************************************
//emit 运行监听事件

//**************************************************
//指定事件注册一个单次监听器
//xh.once('shuo',function(name){
//    console.log('shuo');
//})
//xh.emit('shuo')//最多只会触发一次，触发后立刻解除该监听器
//xh.emit('shuo')



xh.emit('say')


xh.emit('change','11','11')


