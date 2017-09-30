const url = require("url");

var u = "https://user:pass@sub.host.com:8080/p/a/t/h?query=string&color=red&way=go#hash";

//将url拆解为对象
//输出 Url {
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
//         path: '/p/a/t/h?query=string',
//         href: 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash' }
// console.log(url.parse(u));
//拆解后可通过修改对象属性值的方法来修改url的值 比如a.hash="#home"

//将对象转化为url
//输出 https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash
// console.log(url.format({
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
//         path: '/p/a/t/h?query=string',
//         href: 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash' }));

//处理锚点
// 用新的锚点替换原来的锚点 输出 'http://example.com/two'
// url.resolve('http://example.com/one', '/two');


//查询字符串 引用字符串查询模块
const qs = require("querystring");

//例子 将u中的查询字符的query值修改为home
var t = url.parse(u);
var m = qs.parse(t.query);
m.query = "home";
t.query = qs.stringify(m);
t.search = '?'+qs.stringify(m);
console.log(t.search)
var c = url.format(t);
console.log(c);

