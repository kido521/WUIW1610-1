var emitter = require("events");
var util = require("util");
function person(name){
    this.name = name
}
util.inherits(person,emitter);

var xh = new person('小红');


//设计模式  订阅/发布模式
//定义事件 say
xh.addListener('say',function(){
    console.log(this.name)
})
//定义事件 change
xh.addListener('change',function(name){
    this.name = name;
})

//触发事件  change
xh.emit('change',"小王");

//触发事件  say
xh.emit('say');
xh.emit('say');
xh.emit('say');


xh.emit('change',"king")
xh.emit('say');

