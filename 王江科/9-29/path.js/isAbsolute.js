//判断是否为绝对路径
var path = require("path");;
var p = "../9.22";
var p2 = __filename;
console.log(path.isAbsolute(p));
console.log(path.isAbsolute(p2))