var emitter = require("events");
// console.log(emitter);
var util = require("util");

function person(name){
    this.name = name;
}
util.inherits(person,emitter);

var xh = new person("jingyang");


xh.addListener('say',function(){
    console.log(this.name);
})
xh.addListener('change',function(name){
    console.log(name);
})

xh.emit('say');
xh.emit('change',"jy");


