var emitter=require("events");
var util=require("util");
function person(name){
    this.name=name;
}
util.inherits(person,emitter);
var xh=new person('小猴');
xh.addListener('say',function(){
    console.log(this.name);
})
xh.addListener('change',function(name){
    this.name=name;
})
xh.emit('say');
xh.emit('change',"猴哥");
xh.emit('say');
xh.emit('change',"猴王");
xh.emit('say');