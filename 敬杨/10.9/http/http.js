var http = require("http");
// console.log(http);
var server = http.createServer(function(req,res){//创建服务器
    //request请求
    //response响应
    console.log(1);//持续执行
    res.end('hello')//告诉客户端响应完成
})
var h =server.listen(8000,'127.0.0.1',function(){
    // console.log("正在服务中。。。");
    // console.log(server.address());
    console.log("http://"+server.address().address+":"+server.address().port);
});//启动服务器，监听8000端口
// console.log(h === server);
