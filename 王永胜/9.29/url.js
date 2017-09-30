var url = require("url");
// console.log(url);


//1.parse(对路径进行解析,转化成url的对象)
// var u ="https://detail.tmall.com/item.htm?spm=a230r.1.14.140.26c199e9e6EnlL&id=537687237909&ns=1&abbucket=10&skuId=3419516338104";
// var result = url.parse(u);
// console.log(result);

//2.将对象格式话为字符串（format）
var u = {
    protocol: 'http:',
    slashes: true,
    hostname: 'baidu.com',
    port:'80',
    hash:'#home',
    search:'?search=qiwnn',
    pth:'/nodejs?search=qiwnn'
}
console.log(url.format(u));




