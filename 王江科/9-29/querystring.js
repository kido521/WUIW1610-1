var querystring = require("querystring");
var url = require("url");
//parse 字符串转换为对象
var u = "http://www.baidu.com/index/a.php?foo=bar&baz=qux&bqe=quux&corge=123";
var uobj = url.parse(u);
var query = uobj.query;
//parse 转换为对象
var qobj = querystring.parse(query);
qobj.baz = "abc";
//stringify 转换为字符串
var qstr = querystring.stringify(qobj);
uobj.search = "?"+qstr;
uobj.query = qstr;
console.log(url.format(qstr));