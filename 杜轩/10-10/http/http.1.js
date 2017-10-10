var http=require("http");
// console.log(http);
//  METHODS  提交方法
//  STATUS_CODES   状态码

var server = http.createServer(function(req,res){
    //req request  请求
    //res response  响应

    res.end('sasds');

})

server.listen(8000,function(){
    console.log("服务器正在运行中...http://"+server.address().address+":")
});
