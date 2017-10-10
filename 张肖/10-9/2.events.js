var  emitter=require("events");
var util=require("util")
// console.log(emitter)   //返回一个对象
function person(name){
    this.name=name;
}
util.inherits(person,emitter);//第一个参数是谁继承   第二个参数：继承谁

var xh =new person('小红',"19");
xh.addListener('say',function () {
    console.log(this.name)

})
xh.addListener('say',function () {
    console.log(this.age)

})
xh.addListener('say',function () {
    console.log("她叫"+this.name+"今年"+this.age+"岁")

})
xh.emit("say");