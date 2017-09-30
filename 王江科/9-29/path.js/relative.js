//相对路径
var path = require("path");
var p1 = __filename;
console.log(path.relative(p1,"../9.22"));