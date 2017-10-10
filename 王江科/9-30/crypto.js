var crypto = require("crypto");

//1. MD5加密
// var pass = "admin";
// var md5 = crypto.createHash("md5");
// md5.update(pass);
// console.log(md5.digest("hex"));

//2. sha1加密
// var crypto = require("crypto");
// var pass = "12345";
// var sha1 = crypto.createHash("sha1");
// sha1.update(pass);
// console.log(sha1.digest("hex"));

//3. hmac加密
var pass = "admin";
var hmac = crypto.createHmac("sha1","4342");
hmac.update(pass);
console.log(hmac.digest("hex"));
var hmac1 = crypto.createHmac("sha1","dfsd");
hmac1.update(pass);
console.log(hmac1.digest("hex"));