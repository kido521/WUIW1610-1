var http = require("http");

var server = http.createServer(function(req,res){
    // 认为是字符串
    // res.writeHead(200,{'Content-type':'text/plain'});
    // 认为是标签
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("<h1>hello!</h1>");
    res.end();
})
server.listen(8000,'localhost',function(){
    console.log('服务器正在运行中...，访问地址为：http://'+server.address().address+':'+server.address().port);
});