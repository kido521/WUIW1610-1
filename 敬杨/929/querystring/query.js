var qs = require('querystring');
var url = require('url');
// console.log(qs);

var u = "http://baidu.com/admin/aaa?name=zhangsan&age=12";
var urlobj = url.parse(u);
var query = urlobj.query;
var a = qs.parse(query);
a.name = "jiangyang";
var str = qs.stringify(a);
urlobj.search = "?"+str;
urlobj.query =str;
console.log(urlobj);