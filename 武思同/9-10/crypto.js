var crypto=require('crypto')
var content='password'
var md5=crypto.createHash('md5');
md5.update(content)
var a=md5.digest('hex');
console.log(a)


var content='admin'
var sha=crypto.createHash('sha1');
sha.update(content)
var b=sha.digest('hex');
console.log(b);

var content='admin'
var qqq=crypto.createHmac('sha1',"9432");
qqq.update(content)
var b=qqq.digest('hex');
console.log(b);