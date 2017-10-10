var http = require("http");
// http服务器基于请求/相应模型
var server = http.createServer(function(req,res){
    // req request 请求
    // res response 相应
    res.end('你好')
})
// 启动服务器并且监听80端口
server.listen(8000,function(){
    console.log('服务器正在运行中...，访问地址为：http://'+server.address().address+':'+server.address().port);
    console.log(server.address());
});


