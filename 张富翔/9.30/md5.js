var crypto=require('crypto');
// var pass="admin";
// var md5=crypto.createHash("md5");
// md5.update(pass);
// console.log(md5.digest('hex'));


// var pass="12345";
// var sha1=crypto.createHash("sha1");
// sha1.update(pass);
// console.log(sha1.digest('hex'));


var pass="admin";
var hmac=crypto.createHmac("sha1","0915");
hmac.update(pass);
console.log(hmac.digest('hex'));

var hmac1=crypto.createHmac("sha1","haha");
hmac1.update(pass);
console.log(hmac1.digest('hex'));