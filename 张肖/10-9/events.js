var  emitter=require("events");
var util=require("util")
// console.log(emitter)   //返回一个对象
function person(name){
    this.name=name;
}
util.inherits(person,emitter);//第一个参数是谁继承   第二个参数：继承谁

var xh =new person('小红');

//设计模式  订阅 /发布模式
xh.addListener('say',function () {  //addListener定义say事件
    console.log(this.name)

})
xh.addListener('change',function (name) {  //定义change事件
    this.name=name;

})
xh.emit('change',"高瀚宇");   //触发change事件
xh.emit('say')   //emit（）触发事件
xh.emit('say')
