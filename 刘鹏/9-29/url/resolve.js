const url=require('url');

console.log(url.resolve('/one/two/three','four'));
console.log(url.resolve('http://baidu.com/','/one'));
console.log(url.resolve('http://baidu.com/one','/two'));