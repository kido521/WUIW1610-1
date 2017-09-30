var crypto = require("crypto");
// var pass = "admin";
// var md5 = crypto.createHash("md5");//创建MD5
// md5.update(pass);
// console.log(md5.digest('hex'));
// // console.log(md5.digest('hex'));  //只能运行一次  第二次输出报错  再次创建md5可以

// var pass = "12345";
// var sha1 = crypto.createHash("sha1");
// sha1.update(pass);
// console.log(sha1.digest('hex'));

var pass = "admin";
var hmac = crypto.createHmac("sha1","12345");
hmac.update(pass);
console.log(hmac.digest('hex'));

var hmac1 = crypto.createHmac("sha1","abc");
hmac1.update(pass);
console.log(hmac1.digest('hex'));



