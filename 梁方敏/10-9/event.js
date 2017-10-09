var emitter=require("events");
// console.log(emitter);
var util=require("util");
function person(name,age) {
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);
var xh=new person("小红",19);
// xh.setMaxListeners(15);   //设置事件监听器的最大数量 默认是10（超过10个会发出警告）

function aa(){
    console.log(this.name);
}

function bb() {
    console.log(this.age);
}
xh.addListener('say',aa);// addListener||on绑定事件 ----once绑定的事件只会执行一次
xh.once('say',bb);
xh.on('say',function(){console.log('他叫'+this.name+',今年'+this.age+'岁')});
// xh.on('say',function(){console.log('他叫'+this.name+',今年'+this.age+'岁')});
// xh.on('say',function(){console.log('他叫'+this.name+',今年'+this.age+'岁')});
// xh.on('say',function(){console.log('他叫'+this.name+',今年'+this.age+'岁')});
// xh.on('say',function(){console.log('他叫'+this.name+',今年'+this.age+'岁')});
// xh.on('say',function(){console.log('他叫'+this.name+',今年'+this.age+'岁')});
// xh.on('say',function(){console.log('他叫'+this.name+',今年'+this.age+'岁')});
// xh.on('say',function(){console.log('他叫'+this.name+',今年'+this.age+'岁')});
// xh.on('say',function(){console.log('他叫'+this.name+',今年'+this.age+'岁')});
// xh.addListener('say',function(){console.log(`他叫${this.name},今年${this.age}岁`)});
xh.addListener('change',function(name){this.name=name});
console.log(xh.listeners("say").length); //输出事件监听器的数量
xh.emit("say");//触发事件
xh.removeListener("say",aa);  //清除一个事件的处理程序
// xh.removeAllListeners("say"); //清除所有事件的处理程序
xh.emit("change","李四");
xh.emit("say");
xh.emit("change","张三");
xh.emit("say");
// xh.emit("say");
