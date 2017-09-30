const crypto=require('crypto');

//var pass='admin';
//var md5=crypto.createHash('md5');
//md5.update(pass);
//console.log(md5.digest('hex'));
//digest只能运行一次

var pass='aqw123';
var sha1=crypto.createHash('sha1'); //sha1/sha256
sha1.update(pass);
console.log(sha1.digest('hex'))

var pass='aqw123';
var hamc=crypto.createHmac('sha256','qwer');
hamc.update(pass);
console.log(hamc.digest('hex'))
