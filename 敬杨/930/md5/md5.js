var cry = require("crypto");

var pass = "jingyang";
var md5 = cry.createHash('md5');
md5.update(pass);
console.log(md5.digest('hex'));//digest只能运行一次