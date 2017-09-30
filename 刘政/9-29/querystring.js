var qs=require('querystring');
var url=require('url');
// console.log(qs);

var u = 'http://localhost/tiefu/index.php?m=content&c=index&a=lists&catid=9';
var mmm=url.parse(u);
var query = mmm.query;
var search = mmm.search;
var qobj=qs.parse(query);
qobj.m='index';
var searchs='?'+qs.stringify(qobj);
var str = qs.stringify(qobj);
query=str;
search=searchs;
console.log(url.format(mmm));
