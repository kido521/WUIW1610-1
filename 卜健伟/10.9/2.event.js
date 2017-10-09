var emitter=require("events");
var util=require("util");
function person(name,age){
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);
var xh=new person('小李',18);
xh.addListener('say',function(){
    console.log(this.name);
})
xh.addListener('say',function(){
    console.log(this.age);
})
xh.emit('say');