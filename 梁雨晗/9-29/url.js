const url =require('url');

// parse 将url字符串转换为对象
var  u='https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash';
var result=url.parse(u);
console.log(result);


// format 将url对象转换为字符串
var urlobj= {
    protocol: 'https:',
        slashes: true,
        auth: 'user:pass',
        host: 'sub.host.com:8080',
        port: '8080',
        hostname: 'sub.host.com',
        hash: '#hash',
        search: '?query=string',
        query: 'query=string',
        pathname: '/p/a/t/h',
        path: '/p/a/t/h?query=string',
        href: 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'
}
console.log(url.format(urlobj));

// 改值 如hash
var  u='https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash';
var urlobj=url.parse(u);
urlobj.hash="#home"
console.log(url.format(urlobj))
//https://user:pass@sub.host.com:8080/p/a/t/h?query=string#home

// url.resolve()  处理url路径
console.log(url.resolve('/one/two/three', 'four'));         // '/one/two/four'
console.log(url.resolve('http://example.com/', '/one'));    // 'http://example.com/one'
console.log(url.resolve('http://example.com/one', '/two')); // 'http://example.com/two'

