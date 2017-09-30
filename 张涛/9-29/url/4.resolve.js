var url = require('url');

console.log(url.resolve("http://whitemu.com","gulu"));
// http://whitemu.com/gulu

console.log(url.resolve("one/two/three/five","four"));
// one/two/three/four

console.log(url.resolve("www.baidu.com/ns/nice","four"));
// www.baidu.com/ns/four

// url.resolve() 方法会以一种 Web 浏览器解析超链接的方式把一个目标 URL 解析成相对于一个基础 URL。

console.log(url.resolve('/one/two/three', 'four'));         // '/one/two/four'
console.log(url.resolve('http://example.com/', '/one'));    // 'http://example.com/one'
console.log(url.resolve('http://example.com/one', '/two')); // 'http://example.com/two'