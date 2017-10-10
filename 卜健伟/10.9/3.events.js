var emitter=require("events");
var util=require("util");
function person(name,age){
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);
var xh=new person('校长',18);
xh.once('say',function(){
    console.log(this.name);
})
xh.on('change',function(){
    this.name="ww";
    console.log('运行了');
})
xh.emit('say');
xh.emit('change');
xh.emit('say');