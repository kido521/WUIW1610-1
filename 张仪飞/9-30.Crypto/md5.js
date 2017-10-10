var crypto = require("crypto");
var pass = "password";
// var md5 = crypto.createHash("md5");
// md5.update(pass)
// console.log(md5.digest("hex"));



var hamc = crypto.createHmac("sha1","9261");
hamc.update(pass);
console.log(hamc.digest('hex'));

var hamc1 = crypto.createHmac("sha1","9260");
hamc1.update(pass);
console.log(hamc1.digest('hex'));