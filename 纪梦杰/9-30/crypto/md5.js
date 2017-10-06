var crypto=require("crypto");

// md5算法
var pass="admin";
var md5=crypto.createHash("md5");
md5.update(pass);
console.log(md5.digest('hex'));
// digest只能运行一次

// sha1算法
var pass="admin";
var sha1=crypto.createHash("sha1");
sha1.update(pass);
console.log(sha1.digest('hex'));

var pass="12345";
var sha1=crypto.createHash("sha1");
sha1.update(pass);
console.log(sha1.digest('hex'));

// hmac算法
var pass="admin";
var hmac1=crypto.createHmac("sha1","3104");
hmac1.update(pass);
console.log(hmac1.digest('hex'));

var pass="admin";
var hmac2=crypto.createHmac("sha1","1126");
hmac2.update(pass);
console.log(hmac2.digest('hex'));