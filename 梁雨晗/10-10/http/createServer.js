const http = require('http');
var server=http.createServer(function(req,res){
    //req 请求
    //res 响应
    res.end('hello')  //非常重要   通知响应完成
})
// 启动服务器，并且监听8000这个端口
server.listen(8000,'localhost',function () {
    console.log('服务器正在运行中...,访问地址是：http://'+server.address().address+':'+server.address().port)
    // console.log(server.address())  //{ address: '::', family: 'IPv6', port: 8000 }
})