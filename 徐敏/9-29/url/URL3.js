/**
 * Created by Administrator on 2017/9/29 0029.
 */
var url =  require ('url');
var urlObj = {
    protocol: 'http:',
        slashes: true,
        auth: null,
        host: '',
        port: null,
        hostname: 'localhost',
        hash: '#hash',
        search: '?search=123456',
        query: 'search=123456',
        pathname: '%20%20www.baidu.com:80/php/index.php',
        path: '%20%20www.baidu.com:80/php/index.php?search=123456',
        }
var toUrl = url.format(urlObj);
console.log(toUrl);