const crypto = require("9-30/crypto");
//md5
var pass = "admin";
var md5 = crypto.createHash("md5");
md5.update(pass);
console.log(md5.digest('hex'));//只能运行一次//21232f297a57a5a743894a0e4a801fc3

//sha1
var pass = "admin";
var sha1 = crypto.createHash("sha1");
sha1.update(pass);
console.log(sha1.digest("hex")); //d033e22ae348aeb5660fc2140aec35850c4da997

//Hmac
var pass = "admin";
var hmac = crypto.createHash("sha1","9432");    //9432密钥
hmac.update(pass);
console.log(hmac.digest("hex"));    //d033e22ae348aeb5660fc2140aec35850c4da997

var pass = "admin";
var hmac = crypto.createHmac("sha1","9432");
hmac.update(pass);
console.log(hmac.digest("hex"));    //ccc05ee6126b0027c40662d54d7e3586b020555b
