

// 1.hash算法
//     将任意长度的二进制值映射为较短的固定长度的二进制值，这个小的二进制值称为hash值
// 2.md5：
//     信息-摘要算法，把任意长度的字符串变换成定长的大整数。
//     主要提供了加密，解密，签名，验证等功能

// 例子:
// var crypto=require('crypto');
// var pass='admin';
// var md5=crypto.createHash('md5');
// md5.update(pass);
// console.log(md5.digest("hex"))//digest只能运行一次
//hex代表十六进制


// 3.SHA1算法
//     一种不可逆的算法
var crypto=require('crypto');
var pass="admin";
var sha1=crypto.createHash("sha1");
sha1.update(pass);
console.log(sha1.digest("hex"))


// 4.Hmac算法
//     黑客可以通过彩虹表破解
var crypto=require('crypto');
var pass="admin"
var hmac=crypto.createHmac("sha1","8432");
hmac.update(pass);
console.log(hmac.digest("hex"))
