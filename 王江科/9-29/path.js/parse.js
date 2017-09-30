//返回路径字符串对象
var path = require("path");
var p = "D:/前端/9月份/path/join.js";
console.log(path.parse(p));
console.log(path.parse(p).name);