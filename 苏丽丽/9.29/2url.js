// var url=require("url");
// console.log(url);


//如何将URL转换为对象  parse(方法)将url拆分
// const url = require("url");
// var u="https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash"
// var result=url.parse(u);
// console.log(result);

//将对象格式化为字符串 format()方法
// var url=require("url");
// var u="https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash"
// var UrlObj={
//     protocol: 'https:',
//         slashes: true,
//         auth: 'user:pass',
//         host: 'sub.host.com:8080',
//         port: '8080',
//         hostname: 'sub.host.com',
//         hash: '#hash',
//         search: '?query=string',
//         query: 'query=string',
//         pathname: '/p/a/t/h',
//         path: '/p/a/t/h?query=string'
// }
// var urlObj = url.parse(u);
// console.log(url.format(urlObj));


//url路径处理 ：URL.resovel(from,t0)
// 可以用于锚点


// parse（字符串)-->对象   stringify（对象）--》字符串
var qs = require('querystring');
var url = require('url');
// console.log(qs);
var u="http://www.baidu.com:8080/images?baz==hi&gg=dqe#hash";
var urlobj = url.parse(u);
var query = urlobj.query;
var a = qs.parse(query);
a.baz = "hhhh";
var str = qs.stringify(a);
urlobj.search = "?"+str;
urlobj.query =str;
console.log(urlobj.format(urlobj));
//http://www.baidu.com:8080/images?baz=hhhh&gg=dqe#hash


