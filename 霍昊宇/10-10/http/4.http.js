var http =require('http');

var server = http.createServer(function (req,res) {
    res.setHeader("Content-type","text/plain;charset=utf-8") //设置响应头
    // res.writeHead(200,{"Content-type":"text/javascript;"}) //第二种设置响应头的方法
    res.write('hello,world!')
    setTimeout(function () {
        res.write('你好，世界')
        res.end() //同步执行完才会执行异步
    },1000)

})
server.listen(8000,'localhost',function () {
    console.log('服务器正在运行，地址是：http//:'+server.address().address+':'+server.address().port)
})