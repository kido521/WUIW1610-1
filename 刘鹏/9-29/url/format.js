const url = require("url");

var urlObj={
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'localhost',
    port: null,
    hostname: 'localhost',
    hash: null,
    search: '?m=admin&c=index&a=init',
    query: 'm=admin&c=index&a=init',
    pathname: '/mvc/index.php',
    path: '/mvc/index.php?m=admin&c=index&a=init',
    href: 'http://localhost/mvc/index.php?m=admin&c=index&a=init'
}
console.log(url.format(urlObj));