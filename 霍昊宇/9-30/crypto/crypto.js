var crypto = require("crypto");

//md5
var pass = "admin";
var md5 = crypto.createHash("md5");
md5.update(pass);
console.log(md5.digest('hex'));

//sha1

var pass="admin";
var sha1=crypto.createHash("sha1");
sha1.update(pass);
console.log(sha1.digest('hex'));

//Hmac

var hmac=crypto.createHmac("sha1","hoho");
hmac.update(pass);
console.log(hmac.digest('hex'));

var hmac1=crypto.createHmac("sha1","haha");
hmac1.update(pass);
console.log(hmac1.digest('hex'));