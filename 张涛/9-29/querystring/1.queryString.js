var qs=require('querystring');
var url=require('url');
var u="http://www.baidu.com/index/a.php?foo=bar&baz=qux&bqe=quux&corge=123";

var uObj=url.parse(u);
var query=url.parse(u).query;
var qObj=qs.parse(query);
qObj.baz="hello";
var querystr=qs.stringify(qObj);
uObj.search='?'+querystr;
uObj.query=querystr;
console.log(url.format(uObj));

// http://www.baidu.com/index/a.php?foo=bar&baz=hello&bqe=quux&corge=123