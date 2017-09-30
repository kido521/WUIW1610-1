const url = require('url');
// var u="http://user:pass@host.com:8080/p/a/t/h?query=stying#hash";
// var query=url.parse(u).query;
// console.log(url.parse(u));//将字符串格式的url转为对象格式

// var urlobj={
//     protocol: 'http:',
//     slashes: true,
//     port: '80',
//     hostname: 'baidu.com',
//     hash: '#home',
//     search: '?search=aiqiyi',
//     query: 'query=stying',
//     pathname: 'index',
//     path: '/nodejs?search=aiqiyi',
//     href: 'http://baidu.com:80/index?search=aiqiyi#home'
// }
// console.log(url.format(urlobj));  //将对象格式的url转为字符串

// url.resolve('/one/two/three', 'four');         // '/one/two/four'
// url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
// url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'
// url.resolve() 方法会以一种 Web 浏览器解析超链接的方式把一个目标 URL 解析成相对于一个基础 URL。

const qs = require('querystring');
// console.log(qs);

// var parse=qs.parse('foo=bar&abc=xyz&abc=123');
// querystring.parse(str[, sep[, eq[, options]]]) 该方法会把一个 URL 查询字符串 str 解析成一个键值对的集合。
// console.log(parse)

// var search={ foo: 'bar', baz: ['qux', 'quux'], corge: '' };
// search.baz=['youyike','unique'];
// var stringify= qs.stringify(search);  //修改查询字符串的部分内容

console.log(search.baz);
console.log(stringify)
//querystring.stringify(obj[, sep[, eq[, options]]]) 该方法通过遍历给定的 obj 对象的自身属性，生成 URL 查询字符串。