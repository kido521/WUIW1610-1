//返回路径最后一部分
var path = require("path");
var p = __filename;
var s = p.lastIndexOf(path.sep);
console.log(p.slice(s+1));
console.log(path.basename(p));