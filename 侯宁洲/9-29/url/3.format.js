var url = require('url');

// var urlObj = {
//     protocol: 'http:',
//     slashes: true,
//     hostname: 'baidu.com',
//     port: 80,
//     pathname:'index',
//     hash: '#home',
//     search: '?search=aiqiyi',
//     path: '/nodejs?search=aiqiyi'
// }
/*
url字符串 ===>  url Object
          parse

url Object ===> url字符串
           format
*/
var u = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash";
var urlObj = url.parse(u)
urlObj.hash="#home"
// console.log(urlObj)
console.log(url.format(urlObj))