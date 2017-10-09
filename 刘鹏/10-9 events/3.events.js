var emitter = require('events');
var util = require('util');
function person(name,age) {
    this.name = name;
    this.age=age;
}
util.inherits(person,emitter);

var xh = new person('小米',19);

xh.on('say',function () {
    console.log(this.name);
})
xh.on('say',function () {
    console.log(this.age);
})
xh.on('change',function () {
    this.name='aa';
    console.log(this.name);
})
xh.emit('say');
xh.emit('change');