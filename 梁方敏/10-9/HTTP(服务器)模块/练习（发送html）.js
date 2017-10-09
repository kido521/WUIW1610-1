var http=require("http");
var server=http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    // res.setHeader('content-type','text/html;charset=utf-8');
    res.write('<h1>你好，世界</h1>');
    res.end();
});
server.listen(8003,'127.0.0.1',function () {
    console.log('服务器正在运行中...,访问地址是为：http://'+server.address().address+':'+server.address().port);
})