var qs = require("querystring");
var url = require("url");
// console.log(qs);
var u = "http://www.,baidu.com/index/index.php?foo=bar&baz=que&bque=adc&corge=123"
var uObj = url.parse(u);
// console.log(uObj);
var query = uObj.query;
// console.log(query);
var qObj = qs.parse(query);
qObj.baz = "ggg";
// console.log(qObj);
var querystr = qs.stringify(qObj);
uObj.query = querystr;
console.log(uObj);
