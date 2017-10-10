let util = require("util");
// console.log(util)

function parent(){
    // this = child
    this.name = "ppp";
    this.aaa = '123123123';
}
parent.prototype.say = function(){
    console.log(this.name);
}
function child(){
    // this ==  child
    parent.call(this);
    this.name = "child";
}
// child.prototype = new parent();
// util.inherits(child,parent);
//
// var c = new child();
// c.say()
// console.log(c.aaa)
console.log(util.isArray(""))


