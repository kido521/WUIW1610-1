var qs = require('querystring');
var  u='https://user:pass@sub.host.com:8080/p/a/t/h?abc=eyts#hash';
var url =require('url');
var path1=url.parse(u);  //url对象
var qobj=path1.query;   //url对象中的query（abc=eyts）
var querystr = qs.parse(qobj);  //{ abc: 'eyts' }
querystr.abc="hello"; //对象中的abc值替换为"hello"
var search = "?"+qs.stringify(querystr);  //？abc=hello
var query = qs.stringify(querystr); //abc=hello
path1.query = query;
path1.search = search;
// console.log(path1)   //修改后的url对象
console.log(url.format(path1));   //将修改后的url对象转换为字符串
// https://user:pass@sub.host.com:8080/p/a/t/h?abc=hello#hash

