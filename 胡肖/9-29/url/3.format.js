
var url=require('url');
var obj={
    protocol: 'http:',
        slashes: true,
        auth: 'user:pass',
        host: 'host.com:8080',
        port: '8080',
        hostname: 'host.com',
        hash: '#hash',
        search: '?query=string',
        query: 'query=string',
        pathname: '/p/a/t/h',
        path: '/p/a/t/h?query=string',
        href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
};
obj.hash="#home";
console.log(url.format(obj));

