const http = require('http');
// console.log(http);
/*
* http 服务基于请求/响应模型
* */
var server = http.createServer(function(req,res){
    // req request  请求
    // res response 响应
    // res.end('你好');
    res.write("hello word!");
    res.end();   //告诉服务器响应结束
    // console.log(res);
})
var h = server.listen(8000,'127.0.0.1',function () {
    console.log('服务器正在运行中。。。,访问地址为:http://'+server.address().address+':'+server.address().port);
    console.log(server.address().address);
});