const qs = require('querystring');
var url = require('url');
var u = "https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash";
var uobj = url.parse(u);
var ustr = uobj.query;
var qsobj=qs.parse(ustr);
qsobj.query="hello";
var ur = qs.stringify(qsobj);
uobj.search="?"+ur;
uobj.qs=ur;
console.log(url.format(uobj));

// url.parse() 方法会解析一个 URL 字符串并返回一个 URL 对象。
// url.format() 方法返回一个从 urlObject 格式化后的 URL 字符串
// qs.stringify  该方法通过遍历给定的 obj 对象的自身属性，生成 URL 查询字符串
// qs.parse 该方法会把一个 URL 查询字符串 str 解析成一个键值对的集合
