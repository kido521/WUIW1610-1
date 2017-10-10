var http=require('http');
// http服务基于请求/响应模型
var server=http.createServer(function(req,res){
    res.setHeader('Content-type','text/plain;charset=utf-8');
    res.write('你好!');
    setTimeout(function(){
        res.write('啊啊啊啊啊');
        res.end();
    },2000);
});
var h= server.listen(8000,'localhost',function(){
    console.log('服务器正在运行中...,访问的地址为：http://'+server.address().address+':'+server.address().port);
});