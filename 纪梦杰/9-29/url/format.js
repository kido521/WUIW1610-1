const url = require("url");

var urlObj={
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: '?wd=baidufanyi&tn=98012088_2_dg&ch=8',
    query: 'wd=baidufanyi&tn=98012088_2_dg&ch=8',
    pathname: '/s',
    path: '/s?wd=baidufanyi&tn=98012088_2_dg&ch=8',
    href: 'https://www.baidu.com/s?wd=baidufanyi&tn=98012088_2_dg&ch=8'
}

console.log(url.format(urlObj));


//
// url字符串 ===> url Object
//          parse
//
//
// url Object ===> url字符串
//          format
