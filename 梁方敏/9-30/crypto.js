var crypto=require("crypto");
// hash 算法
// var pass= "admin";
// var md5=crypto.createHash("md5");
// md5.update(pass);
// var md5pass=md5.digest("hex") //hex十六进制
// console.log(md5pass);

// sha1 算法
// var pass1="12345";
// var sha1=crypto.createHash("sha1");
// sha1.update(pass1);
// var sha1pass=sha1.digest("hex");
// console.log(sha1pass);

// hmac
var pass="admin";
var hmac1=crypto.createHmac("sha1","9432");
hmac1.update(pass);
var hmac1pass=hmac1.digest("hex");
console.log(hmac1pass);
var hmac2=crypto.createHmac("sha1","haha");
hmac2.update(pass);
var hmac2pass=hmac2.digest("hex");
console.log(hmac2pass);
