const emitter = require('events');
const util = require('util');
function person(name,age) {
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);
var xh = new person('小红',19);

xh.addListener('say',function () {
     console.log(this.name);
});  //绑定事件
xh.addListener('change',function () {
this.name='小明';
})   //无传参
xh.addListener('change1',function (name) {
    this.name=name;
})  //有传参
xh.emit('change');
xh.emit('change1',"小王");
xh.emit('say'); //触发事件


xh.addListener('say',function () {
    console.log(this.name) ;
})
xh.addListener('say',function () {
    console.log(this.age);
})
xh.addListener('say',function () {
    console.log('他叫'+ this.name +', 今年' +this.age);
})