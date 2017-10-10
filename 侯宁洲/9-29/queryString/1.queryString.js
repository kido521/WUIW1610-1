var qs = require("querystring");
var url = require("url");
var u = "http://www.baidu.com/index/a.php?foo=bar&baz=qux&bqe=quux&corge=123";

// baz = hello
var uObj = url.parse(u)
var query = uObj.query;
var qObj = qs.parse(query);
qObj.baz = "hello";
var querystr = qs.stringify(qObj);

uObj.search  ='?'+querystr;
uObj.query = querystr;
console.log(url.format(uObj))




/*                      parse
* 'foo=bar&hello=world' ------> {}
*
*     stringify
*  {} ------> 'foo=bar&hello=world'
* */
console.log(qs)