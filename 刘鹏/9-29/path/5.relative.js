var path = require('path');

var p = "C:\\Users\\lenovo\\Desktop\\test\\node\\path";
var p2 = "../buffer.js";

// 用于将相对路径转为绝对路径。

console.log(path.relative(p2, p))