var crypto=require('crypto');
var md5 =crypto.createHash('md5');
var pass= 'admin';
md5.update(pass);
console.log(md5.digest('Hex'));


var sha1=crypto.createHash("sha1");
sha1.update(pass);
console.log(sha1.digest('hex'));

var hmac=crypto.createHmac("sha1","0915");
hmac.update(pass);
console.log(hmac.digest('hex'));
