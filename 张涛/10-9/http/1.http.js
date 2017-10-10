var http = require("http");
// console.log(http);


// HTTP 服务器基于请求/响应模型

var server = http.createServer(function (req, res) {
    //req request 请求
    //res response 响应
    res.setHeader("Content-type","text/plain")//设置响应头 具体访问http://www.runoob.com/http/http-content-type.html
    // Content-Type，内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件。
    // res.writeHeader(statusCode,{"Content-type","text/css"});
    // res.writeHeader(200,{});

    // req.url 请求地址

    // request.method 请求方式get post put delete


    // res.statusCode 设置状态码
    // res.statusCode = 404;
    // res.statusCode = 200;

    res.write()//给客户端发送数据
    res.end("hello,moto")//终止响应
})
// sever.listen(800);//启动服务器 监听 // http://localhost:800/



server.listen(800,"127.0.0.1",function () {
    console.log("服务器已开启..."+ "http://"+server.address().address+":"+server.address().port)
});