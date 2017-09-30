const crypto = require('crypto');

var pass="diamond";
var hmac=crypto.createHmac("sha1","jsodks");  //jsodks 密钥自定义
hmac.update(pass);
console.log(hmac.digest('hex'));
//8c1a5528b081c492d10a60adbe9706734f4a340a


var hmac1=crypto.createHmac("sha1","345");
hmac1.update(pass);
console.log(hmac1.digest('hex'));
//f36cfb13c80515aaa53d0d7f750e3a2463e0f2b4


var hmac2=crypto.createHmac("md5","345");
hmac2.update(pass);
console.log(hmac2.digest('hex'));
//2d64464d730cb965b4b03b85e5ce8a1d