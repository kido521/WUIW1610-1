var  crypto = require("crypto");

// md5算法 加密  128位  不可逆   只能运行一次
// var pass ="admin";
// var md5=crypto.createHash("md5");
// md5.update(pass);
// console.log(md5.digest("hex"))   //hex 16进制


//SHA1算法 加密 160位 不可逆
// var pass='123';
// var sha1=crypto.createHash("sha1");
// sha1.update(pass);
// console.log(sha1.digest("hex"));

// Hmac 算法   需要密钥
// var pass = "zx2222"
// var hmac=crypto.createHmac("sha1","2222");  //2222 ：密钥
// hmac.update(pass);
// console.log(hmac.digest("hex"))

// 密钥不同，所产生的密码不同
// var hmac=crypto.createHmac("sha1","123");  // 123 ：密钥
// hmac.update(pass);
// console.log(hmac.digest("hex"))



