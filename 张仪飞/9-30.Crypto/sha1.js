var crypto = require("crypto");
var pass = "password";
var sha1 = crypto.createHash("sha1");
sha1.update(pass);
console.log(sha1.digest('hex'));