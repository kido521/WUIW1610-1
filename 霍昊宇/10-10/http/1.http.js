var http =require('http');

/*
http服务基于请求／响应模型
req request 请求
res response 响应
 createServer 创建一个服务器
 */
var server = http.createServer(function (req,res) {
    res.write('tt')
    res.end() //响应完成

})
server.listen(8000,'localhost',function () {
    console.log('服务器正在运行，地址是：http//:'+server.address().address+':'+server.address().port)
    // console.log(server)
    console.log(server.address())
    console.log(server.address().port)
})