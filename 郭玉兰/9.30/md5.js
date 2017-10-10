//md5 128位  是不可逆的算法
// var crypto=require("crypto");
// var pass="admin";
// var md5=crypto.createHash("md5");
// md5.update(pass);
// console.log(md5.digest("hex"));//hex 十六进制  21232f297a57a5a743894a0e4a801fc3
//md5也不安全  md5.digest（）只能运行一次 想再次运行，必须重新创建

//SHA1160位  是不可逆的算法
// var crypto=require("crypto");
// var pass ="1245";
// var sha1=crypto.createHash("sha1");
// sha1.update(pass);
// console.log(sha1.digest("hex"));//f350d780ea8aaa48030b4db64f790c14dbcd757f
//比ma5长点  所以比mad5难破

//hmac
var crypto=require("crypto");
var pass ="admin";

var hmac=crypto.createHmac("sha1","9432");
hmac.update(pass);
console.log(hmac.digest("hex"));//ccc05ee6126b0027c40662d54d7e3586b020555b

var hmac1=crypto.createHmac("sha1","wowo");
hmac1.update(pass);
console.log(hmac1.digest("hex"));//2fcb951851100fee69516244860cb7bb7199deec