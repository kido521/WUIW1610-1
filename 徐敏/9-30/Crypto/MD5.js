/**
 * Created by Administrator on 2017/9/30 0030.
 */
var crypto =  require ('crypto');
var pass = "admin";
var md5 = crypto.createHash("md5");
md5.update(pass);
console.log(md5.digest('hex'));   //digest 只能运行一次

//输出结果：21232f297a57a5a743894a0e4a801fc3