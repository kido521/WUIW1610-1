//md5加密
var crypto = require("crypto");

// var pass = "1234567890beiweufjj";
// var md5 = crypto.createHash("md5");
// md5.update(pass);
// console.log(md5.digest('hex'));//digest只能运行依次

//SHA1加密
// var pass = "1234567890beiweufjj";
// var sha = crypto.createHash("sha1");
// sha.update(pass);
// console.log(sha.digest('hex'));//digest只能运行依次


//Hamc算法
var pass = "1234567890beiweufjj";
var hmac = crypto.createHmac("sha1","2435");
hmac.update(pass);
console.log(hmac.digest('hex'));