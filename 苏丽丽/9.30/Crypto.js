var crypto=require("crypto");

// Md5  128位  不可逆  只能运行一次
var pass="admin";
var md5 = crypto.createHash("md5");  //创建
md5.update(pass);  //更新
console.log(md5.digest("hex"));//提取
//21232f297a57a5a743894a0e4a801fc3 加密

// SHA1  160位  不可逆  这个比上一个难破解
var pass="admin";
var sha1=crypto.createHash("sha1");
sha1.update(pass);
console.log(sha1.digest("hex"));
//d033e22ae348aeb5660fc2140aec35850c4da997


// Hmac算法
var pass ="admin";
var hmac=crypto.createHash("sha1","8432");//8432秘钥
hmac.update(pass);
console.log(hmac.digest("hex"));

var pass ="admin";
var hmac1=crypto.createHmac('sha1','haha');
hmac1.update(pass);
console.log(hmac1.digest("hex"));



