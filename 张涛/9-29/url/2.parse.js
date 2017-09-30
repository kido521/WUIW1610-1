var url = require('url');


console.log(url.parse("http://user:pass@host.com:8080/p/a/t/h?query=string#hash"));

// url.parse() 方法会解析一个 URL 字符串并返回一个 URL 对象。

// Url {
//     protocol: 'http:',
//         slashes: true,
//         auth: 'user:pass',
//         host: 'host.com:8080',
//         port: '8080',
//         hostname: 'host.com',
//         hash: '#hash',
//         search: '?query=string',
//         query: 'query=string',
//         pathname: '/p/a/t/h',
//         path: '/p/a/t/h?query=string',
//         href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' }