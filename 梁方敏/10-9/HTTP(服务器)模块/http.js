var http=require("http");
// console.log(http);
//HTTP服务基于请求/响应模型
var server=http.createServer( //创建一个服务器
    function (req,res) {
         //req request 请求
        //res response 响应
        console.log('1');
        res.end('你好');
})
var h=server.listen(8000,'127.0.0.1',function () {
    console.log('服务器正在运行中...,访问地址是为：http://'+h.address().address+':'+h.address().port);
    console.log(h.address());
    console.log(h.address().address)
});
console.log(h===server);