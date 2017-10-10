var emitter = require("events");

var util = require("util");

function person(name,age){
	this.name = name
	this.age = age
}
util.inherits(person,emitter);
var xh = new person('小红',19);


xh.on('say',function(name,age){
	this.name = name;
	this.age = age;
})
function aa(){
	console.log('xiaohong')
}
function bb(){
	console.log(22)
}
xh.on('say',aa);
xh.on('say',bb);
xh.removeAllListeners('say');
xh.emit('say')
