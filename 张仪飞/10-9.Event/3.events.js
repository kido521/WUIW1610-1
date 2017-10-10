var emitter = require("events");

var util = require("util");

function person(name,age){
	this.name = name
	this.age = age
}
util.inherits(person,emitter);
var xh = new person('小红',19);

xh.on('say',function(){
	console.log(this.name);
})
xh.on('say',function(){
	console.log(this.age);
})
xh.on('say',function(){
	console.log('名字'+':'+this.name+'年龄:'+this.age);
})
xh.emit('say');
