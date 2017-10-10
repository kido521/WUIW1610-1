var http = require("http");
//创建服务器
var server = http.createServer(function(req,res){
    res.setHeader("Content-Type","text/plain;charset=utf-8");   //要解析标签，需写成text/html
    res.write("你好");
    setTimeout(function(){
        res.write("延迟");
        res.end();
    },2000)
});
server.listen(8000,'localhost',function(){
    console.log('http://'+server.address().address+":"+server.address().port);
});