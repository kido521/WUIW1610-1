var crypto = require("crypto");

// var pass = "admin";
// var sha1 = crypto.createHash("sha1");
// sha1.update(pass);
// console.log(sha1.digest("hex"));

var pass = "admin";
var hmac = crypto.createHmac("sha1","6166");
hmac.update(pass);
console.log(hmac.digest('hex'));

var hmac1 = crypto.createHmac("sha1","1234");
hmac1.update(pass);
console.log(hmac1.digest('hex'));