
// 1.qs.parse()        //将字符串转换成对象

// 2.qs.stringify()    //将对象转换成字符串
const qs = require("querystring");
const url = require("url");
var path = "http://www.baidu.com:8080/images?foo=hi&gg=dqe#hash";
var pathfirst = url.parse(path);
var objstr = pathfirst.query;
var qsstr = qs.parse(objstr);
qsstr.foo = "hello";
var search = "?"+qs.stringify(qsstr);
var query = qs.stringify(qsstr);
pathfirst.query = query;
pathfirst.search = search;
console.log(url.format(pathfirst));
