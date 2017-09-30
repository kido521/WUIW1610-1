var cry = require("crypto");

var pass = "plmqaz0";
var sha1 = cry.createHash('sha1');
sha1.update(pass);
console.log(sha1.digest('hex'));//digest只能运行一次