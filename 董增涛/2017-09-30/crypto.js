const crypto = require('crypto');

var pass = '123456';

//md5加密
//不可逆
//一个结构只能运行一次
// var md5 = crypto.createHash('md5');
// md5.update(pass);
// console.log(md5.digest('hex'));

//sha1加密
//与md5基本一致 但是长度更长
// var sha1 = crypto.createHash('sha1');
// sha1.update(pass);
// console.log(sha1.digest('hex'));
//7c4a8d09ca3762af61e59520943dc26494f8941b

//hmac加密
// 在生成之前再加上一段密钥 密钥为一段字符串 之后再生成
var hamc = crypto.createHmac('sha1','000000');
hamc.update(pass);
console.log(hamc.digest('hex'));
//当密钥为654321时 输出3eba0dae6fe8fcd14bc5a4fcaa6e805ff2761774
//当密钥为000000时 输出1b5a88010e393ad50ed3d206a4ad66e73e39b787
