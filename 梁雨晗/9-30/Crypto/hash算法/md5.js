const crypto = require('crypto');

var pass="diamond";
var md5=crypto.createHash("md5");
md5.update(pass);
console.log(md5.digest('hex'));//hex 16进制
//75c6f03161d020201000414cd1501f9f
