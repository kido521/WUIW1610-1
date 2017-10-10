/**
 * Created by Administrator on 2017/9/30 0030.
 */
var crypto =  require ('crypto');
var pass = "admin";
var hmac = crypto.createHmac("sha1","qwer");
hmac.update(pass);
console.log(hmac.digest('hex'));

//输出结果：a84fb5424eb52774b2f5102af57ead730005d07c


var pass1 = "admin";
var hmac1 = crypto.createHmac("sha1","zxcv");
hmac1.update(pass);
console.log(hmac1.digest('hex'));

//输出结果：3cb4c364c119cf6f82cf239a53670745572a4e02