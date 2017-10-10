var http=require('http');
// http服务基于请求/响应模型
var server=http.createServer(function(req,res){
    var date=new Date();
    res.write(date.toLocaleTimeString());
    res.end();
});
var h= server.listen(8000,'localhost',function(){
    console.log('服务器正在运行中...,访问的地址为：http://'+server.address().address+':'+server.address().port);
});