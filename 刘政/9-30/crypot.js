var crypot=require('crypot');

var pass = 'admin';
var md5=crypot.createHash('md5');
md5.update(pass);
console.log(md5.digest('hex'));



var hmac1=crypot.createHash("sha1","hash");//"hash"密钥
hash1.update(pass);
console.log(hash1.digest('hex'));////d033e22ae348aeb5660fc2140aec35850c4da997


var hmac1=crypot.createHmac("sha1","hash");
hmac1.update(pass);
console.log(hmac1.digest('hex'));//ccc05ee6126b0027c40662d54d7e3586b020555b