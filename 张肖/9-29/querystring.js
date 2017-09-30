var  qs =require('querystring');
var url =require( 'url');
var u="http://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash";
var query =url.parse(u);
var querys=url.parse(u).query
var qObj=qs.parse(querys);
qObj.query="abc";
var search = "?"+qs.stringify(qObj);
query.query = query;
query.search = search;
console.log(url.format(query));



