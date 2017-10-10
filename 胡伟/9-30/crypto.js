const cp = require('crypto');
// md5 加密
// var pass="admin";
// var md5 = cp.createHash("md5");
// md5.update(pass);
// console.log(md5.digest('hex')); //digest 只能运行一次

// sha1  加密
// var pass="12345";
// var sha1 = cp.createHash('sha1');
// sha1.update(pass);
// console.log(sha1.digest('hex'));

// Hmac加密
var pass = "admin";
var hmac = cp.createHmac("sha1","key");
hmac.update(pass);
console.log(hmac.digest('hex'));


