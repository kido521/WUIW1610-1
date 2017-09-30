var url = require("url");
// 1.parse 将字符串转换为对象格式
var u = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash";
var result1 = url.parse(u);
// console.log(result1);

//2.format 将对象转换为字符串

result1.hash = "#home";
var result2 = url.format(result1);
// console.log(result2)

// 3.resolve(from,to)用于处理URL路径，也可以用于处理锚点
var url1 = url.resolve('/one/two/three', 'four');
var url2 = url.resolve('http://example.com/', '/one');
var url3 = url.resolve('http://example.com/one', '/two');
// console.log(url1);
// console.log(url2);
// console.log(url3);