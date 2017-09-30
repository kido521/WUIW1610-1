var qs=require('querystring');
var url=require('url');

var u="http://www.baidu.com/index/a.php?foo=bar&baz=qux&bqe=quux&corge=123";

var uObj=url.parse(u);
// console.log(uObj)
var query=url.parse(u).query;
// console.log(query)
var qObj=qs.parse(query);
// console.log(qObj)
qObj.baz="bbbbbbb";
var querystr=qs.stringify(qObj);
// console.log(querystr)
uObj.search='?'+querystr;
uObj.query=querystr;
console.log(url.format(uObj));