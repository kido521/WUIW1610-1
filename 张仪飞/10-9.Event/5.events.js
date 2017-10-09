var emitter = require("events");

var util = require("util");

function person(name,age){
	this.name = name
	this.age = age
}
util.inherits(person,emitter);
var xh = new person('小红',19);

function aa(){
	console.log(this.name)
}
xh.on("say",aa)

xh.emit('say');
xh.removeListener('say',aa);


