var crypto = require("crypto");
var pass = "admin";
var md5 = crypto.createHash("md5");
md5.update(pass);
console.log(md5.digest('hex'));