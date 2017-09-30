var path = require('path');

var p = "../buffer.js"
var p2 = __dirname;

// 判断参数 path 是否是绝对路径。
console.log(path.isAbsolute(p));
// false
console.log(path.isAbsolute(p2));
// true