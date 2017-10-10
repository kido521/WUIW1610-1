var http =require("http");
var server=http.createServer(function(req,res){
    //req   request     请求
    //res   response    响应

    res.end("hello");

})
server.listen(8000,'127.0.0.1',function(){
    console.log('服务器正在运行中...,返回地址为'+server.address().address+':'+server.address().port)

});



