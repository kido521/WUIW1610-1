var http = require("http");

/*
* http服务基于请求/响应模型
*
* */
var server = http.createServer(function (req,res) {
    //req request 请求
    //res response 响应
    console.log(1)
    res.end('你好')
})
server.listen(8000,'127.0.0.1',function(){
    console.log('服务器正在运行中...,访问地址为:http://'+server.address().address+':'+server.address().port)
});

