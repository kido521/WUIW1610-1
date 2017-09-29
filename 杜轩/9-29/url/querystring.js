var query=require('querystring');
var url=require('url');
var p ='http://user:pass@sub.host.com:8080/p/a/t/h?query=string&&abc=efg&&hyi=ziq#hash';
var uObj=url.parse(p);
var q=query.parse(uObj.query);
q.abc='123';
var qstr=query.stringify(q);
uObj.search='?'+qstr;
uObj.query=qstr;

console.log(url.format(uObj));