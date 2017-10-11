var express = require('express');
var app = express();

// 字符串模式的路由
// app.get("/ab?c",function (req,res) {
//     res.send("访问成功")
// })   //问号表示前面b可有可无    匹配 acd 和 abcd
// app.get('/ab+cd', function(req, res) {
// res.send('ab+cd');
// });  //加号  加号前面的b 由一次或多次   匹配 abcd、abbcd、abbbcd等
//
// app.get('/ab*cd', function(req, res) {
//     res.send('ab*cd');
// }); // * 号表示*前面可以有任意的字母   匹配 abcd、abxcd、abRABDOMcd、ab123cd等
//
// app.get('/ab(cd)?e', function(req, res) {
//     res.send('ab(cd)?e');
// });  //小括号代表分组    匹配 /abe 和 /abcde

//正则表达式的路由
app.get(/a/, function(req, res) {
    res.send('含有a的路径');
});  //匹配任何路径中含有 a 的路径

app.get(/.*fly$/, function(req, res) {
    res.send('以fly结尾');
})   //.代表开头  *代表任意 $代表以什么结尾 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等

app.listen(3000)


// 路由句柄
// 函数
// app.get("/",function (req,res,next) {
//     console.log("第一个函数");
//     next(); //
//
// },function (rew,res) {
//     console.log("第二个函数");
//     res.end("hello word")
//
// })
//
// 混合
// var cb0 = function (req, res, next) {
//     console.log('第一个函数');
//     next();
// }
//
// var cb1 = function (req, res, next) {
//     console.log('第二个函数');
//     next();
// }
//
// app.get('/', [cb0, cb1], function (req, res, next) {
//     console.log('第三个函数');
//     next();
// }, function (req, res) {
//     res.send('Hello from 混合!');
// });
//
// 函数数组
// var cb0 = function (req, res, next) {
//     console.log('第一个函数');
//     next();
// }
//
// var cb1 = function (req, res, next) {
//     console.log('第二个函数');
//     next();
// }
//
// var cb2 = function (req, res) {
//     res.send('Hello from 函数数组!');
// }
//
// app.get('/', [cb0, cb1, cb2]);