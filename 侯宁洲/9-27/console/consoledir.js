// var obj = {
//     name:"kkk",
//     age:19,
//     sex:"男",
//     say:function(){
//         console.log(this.name);
//     }
// }

var fn = function(){
    this.name = "123123123"
}
var o = new fn();
console.log(fn)
console.dir(fn)