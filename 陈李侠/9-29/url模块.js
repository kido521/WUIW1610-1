// querystring用来处理url中的查询字符串
const url = require("url");
// console.log(url);

// 1.url.parse(url,parseQueryString,...)

// var path = "http://www.baidu.com:8080/images?foor=4#hash";
// console.log(url.parse(path));   //字符串转换成对象

// 2.url.format(obj,options)    //对象转换成字符串

// var obj = {
//         protocol: 'http:',
//         slashes: true,
//         auth: null,
//         host: 'www.baidu.com:8080',
//         port: '8080',
//         hostname: 'www.baidu.com',
//         hash: '#hash',
//         search: '?foor=4',
//         query: 'foor=4',
//         pathname: '/images',
//         path: '/images?foor=4',
//         href: 'http://www.baidu.com:8080/images?foor=4#hash'
//     };
// console.log(url.format(obj));

// 3.url.resolve(source,relative); //处理url路径，也可用于处理锚点
// console.log(url.resolve('/one/two/three','four'));