var http=require('http');
// http服务基于请求/响应模型
var server=http.createServer(function(req,res){
    // res.writeHead(200,{'Content-type':'text/plain'});
    // res.writeHead(200,{'Content-type':'text/html'});
    // res.setHeader('Content-type','text/plain');
    res.setHeader('Content-type','text/html');
    res.write("<h1>hello!</h1>");
    res.end();
});
server.listen(8000);
