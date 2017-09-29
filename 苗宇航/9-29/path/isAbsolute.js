var path = require("path");
var p = "../path/path.js";
var p2 = __filename;
console.log(path.isAbsolute("p"));
console.log(path.isAbsolute("p2"));