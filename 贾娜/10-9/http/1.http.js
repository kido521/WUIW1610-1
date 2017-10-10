var http=require('http');
// http服务基于请求/响应模型
//1.创建一个服务器
var server=http.createServer(function(req,res){
    // req  request  请求   客户端给服务器请求
    //req.url  获取请求地址
    //request.header  获取请求头信息
    //request.method   获取请求方式  get post put delete
    // res response  响应   服务器给客户端响应
    //res.writeHeader(status,{name,value});
    //res.setHeader(name,value);   设置请求头
    //res.setHeader('Content-type','application/octet-stream');  不知道是什么类型文件，二进制流
    //res.setHeader('Content-type','text/plain;charset=utf-8');
    //res.write()   2.给客户端发送数据
    res.end('你好');  //3.终止响应
});
//4.启动服务器，并且持续监听8000端口
var h= server.listen(8000,'127.0.0.1',function(){
    console.log('服务器正在运行中...,访问的地址为：http://'+server.address().address+':'+server.address().port);
});
// em.emit();
// em.on("request",function(req,res){
//     // req  request  请求
//     // res response  响应
//     res.end('你好');
// });