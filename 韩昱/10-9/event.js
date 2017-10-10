var emitter=require("events");
// console.log(emitter);
var util=require("util");
function person(name) {
    this.name=name;
}
util.inherits(person,emitter);
var xh=new person("小红");

xh.addListener('say',function bb(){console.log(this.name)}); //绑定事件
// xh.addListener('change',bb);
// function bb(name){
//     this.name=name;
// }
// xh.emit("say");
// xh.emit("change","小王") //触发事件
// xh.emit("say");
// -------------------------------------------------------------
xh.addListener('say',function cc(){console.log('cccc')});
xh.addListener('say',function dd(){console.log('dddd')});
xh.addListener('say',function d1(){console.log('dddd')});
xh.addListener('say',function d2(){console.log('dddd')});
xh.addListener('say',function d3(){console.log('dddd')});
xh.addListener('say',function d4(){console.log('dddd')});
xh.addListener('say',function d5(){console.log('dddd')});
xh.addListener('say',function d6(){console.log('dddd')});
xh.addListener('say',function d7(){console.log('dddd')});
xh.addListener('say',ee);
xh.on('say',ff);
function ee(){console.log('eeee')}
function ff(){console.log('ffff')}
// console.log(xh.listeners("say"));//返回指定事件的监听器数组
//[ [Function: bb], [Function: cc], [Function: dd] ]返回指定事件的监听器数组
// xh.removeListener('say',ee);//移除一个监听
// console.log(xh.listenerCount('say')) //监听器的数量
// xh.removeAllListeners();//移除所有
//xh.setMaxListeners(18);//设置最大绑定监听数量
xh.emit("say");
