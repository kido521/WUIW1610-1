var EventEmitter=require('events');
var util = require('util');
function person(name,age){
    this.name = name;
    this.age=age;
}
util.inherits(person,EventEmitter);
var xh=new person('小红',19);

xh.once('say',function () {
    console.log(this.name);
})

xh.emit('say');
xh.emit('say');
xh.emit('say');
