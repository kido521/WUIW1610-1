var crypto= require("crypto");

// var pass="admin";
// var md5=crypto.createHash("md5");
// md5.update(pass);
// console.log(md5.digest("hex"));//crypto只可以运行一次

// var pass="12345";
// var sha1=crypto.createHash("sha1");
// sha1.update(pass);
// console.log(sha1.digest("hex"));

var pass="admin";
var hmac=crypto.createHash("sha1","1008");
hmac.update(pass);
console.log(hmac.digest("hex"));

var hmac1=crypto.createHash("sha1","dsds");
hmac1.update(pass);
console.log(hmac1.digest("hex"));