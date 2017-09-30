var url=require('url');

var p ='http://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash';
var uObj=url.parse(p);
uObj.hash="#home";

console.log(url.format(uObj));
