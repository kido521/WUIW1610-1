var emitter =require("events");
var util =require("util");
function person(name) {
    this.name=name;
}
util.inherits(person,emitter);

var xh=new person('小红');

xh.addListener('say',function(){
    console.log(this.name)
})
xh.addListener('change',function(name){
    this.name=name;
})

//触发事件
xh.emit('change',"老王");
xh.emit('say');