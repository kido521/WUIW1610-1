var emitter = require('events')

var util =require('util');

function person(name){
    this.name=name;
}
util.inherits(person,emitter)

var xh= new person('小明')

// on和addListener效果一样
xh.addListener('say',function () {
    console.log(this.name)
})
xh.on('change',function (name) {
    this.name=name;
})

xh.emit('say');
xh.emit('change','qq');
xh.emit('say');
xh.emit('change','bb');
xh.emit('say');