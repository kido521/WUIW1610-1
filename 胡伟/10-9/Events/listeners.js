const emitter = require('events');
const util = require('util');
function person(name,age) {
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);
var xh = new person('小红',19);

function aa() {
    console.log(this.name);
}
function bb() {
    console.log(this.age);
}
xh.on('say',aa);
xh.on('say',bb);
xh.emit('say');
console.log(xh.listeners('say'));
console.log((xh.listenerCount('say')));

