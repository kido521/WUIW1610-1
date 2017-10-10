var crypto = require("crypto");
// 模块提供了加密功能，包含对 OpenSSL 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装。
// console.log(crypto);



// md5加密
// var crypto=require("crypto");
// var pass= "admin";
// var md5=crypto.createHash("md5");
// md5.update(pass);
// var md5pass=md5.digest("hex") //hex十六进制
// console.log(md5pass);
//
//
// sha1算法
// var pass = "12345";
// var sha1 = crypto.createHash("sha1");
// sha1.update(pass);
// console.log(sha1.digest("hex"));
//


// Hmac加密
var pass = "admin";
var hmac = crypto.createHmac("sha1","8520");
var hmac1 = crypto.createHmac("sha1","9517");
hmac.update(pass);
hmac1.update(pass);
console.log(hmac.digest("hex"));
console.log(hmac1.digest("hex"));


