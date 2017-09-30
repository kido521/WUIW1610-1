const url = require('url');
// var u= "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=b";
// var result = url.parse(u);
// console.log(result);

 var ur ={
        protocol: 'https:',
        slashes: true,
        auth: null,
        host: 'www.baidu.com',
        port: null,
        hostname: 'www.baidu.com',
        hash: null,
        search: '?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=b',
        query: 'ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=b',
        pathname: '/s',
        path: '/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=b',
        href: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=b'
 }
 console.log(url.format(ur));