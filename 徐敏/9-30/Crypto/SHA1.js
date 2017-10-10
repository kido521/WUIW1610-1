/**
 * Created by Administrator on 2017/9/30 0030.
 */
var crypto =  require ('crypto');
var pass = "admin";
var sha1 = crypto.createHash("sha1");
sha1.update(pass);
console.log(sha1.digest('hex'));

//输出结果：d033e22ae348aeb5660fc2140aec35850c4da997
