var path = require("path");
var p = "d:/desktop/wuiw1610-1/";
console.log(path.normalize(p))


var p1 = "d:/desktop/wuiw1610-1/../";
console.log(path.normalize(p1))


var p1 = "d:/desktop/./wuiw1610-1/";
console.log(path.normalize(p1))