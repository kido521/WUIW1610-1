var path = require("path");
var f = __filename;


var po = path.parse(f);

po.base ="1111.js";

console.log(path.format(po));




