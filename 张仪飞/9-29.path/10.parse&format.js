var path = require("path");
var f =__filename;
// console.log(f);

var po = path.parse(f);
po.base ="1111.js";

console.log(path.format(po));



