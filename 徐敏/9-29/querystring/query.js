/**
 * Created by Administrator on 2017/9/29 0029.
 */
var qs =  require ('querystring');
var url =  require ('url');
var u = "http://localhost/%20%20www.baidu.com:80/php/index.php?search=123456&find=zxcv&a=admin#hash";
var uobj = url.parse(u);
var query = uobj.query;
var qobj = qs.parse(query);
qobj.find = "qwer";
var urlstr = qs.stringify(qobj);
uobj.search = "?"+urlstr;
uobj.query = urlstr;
console.log(uobj);


