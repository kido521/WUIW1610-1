
var qs = require('querystring');
var url = require('url');
var u = "http://baidu.com/admin/aaa?name=linlinqi&age=12";
var urlobj = url.parse(u);
var query = urlobj.query;
var a = qs.parse(query);
a.name = "hanyu";
var str = qs.stringify(a);
urlobj.search = "?"+str;
urlobj.query =str;

console.log(url.format(urlobj));