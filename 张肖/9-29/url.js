const url = require('url');
// console.log(url)

// url.parse()  将字符串转化为对象
// var u ="http://example.com/"
// var result = url.parse(u)
// console.log(result)


// 将对象转化为字符串

// var Url ={
//     protocol: 'http:',
//         slashes: true,
//         auth: null,
//         host: 'example.com',
//         port: null,
//         hostname: 'example.com',
//         hash: null,
//         search: null,
//         query: null,
//         pathname: '/',
//         path: '/',
//         href: 'http://example.com/'
// }
// console.log(url.format(Url));


// 将url字符串--parse()-->url对象
// url对象转化为--format()-->url字符串


//将url路径的协议http改为https
// var u ="http://example.com/"
// var Url=url.parse(u)
// Url.protocol="https";
// console.log(url.format(Url));

//url.resolve  处理路径的  用于处理url路径，也剋处理锚点。
console.log(url.resolve("/one/two/three",'four')) 

