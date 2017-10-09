var emitter = require("events");
var util = require("util");



// 事件定义
function person(name){
	this.name = name
}
util.inherits(person,emitter);
var xh = new person('小红');

// 事件定义
xh.addListener('say',function(){
	console.log(this.name)
})
// 事件定义
xh.addListener('change',function(name){
	this.name = name;
})

// 触发change事件
xh.emit('change',"xiaowang");

// 触发say事件
xh.emit('say');
xh.emit('say');
xh.emit('say');
xh.emit('say');
