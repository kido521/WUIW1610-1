var http=require("http");

var server=http.createServer(function (req,res) {
    var time=new Date();
    var myDate=time.toLocaleDateString();
    var mytime=time.toLocaleTimeString();
    res.setHeader('Content-type','text/plain;charset=utf-8')
    res.write('time from BeiJing:  '+myDate+' '+mytime);
    res.write('你好,世界');
    setTimeout(function () {
        res.write('我不好，人类');
        res.end();
    },2000)
})
server.listen(8000,'127.0.0.1',function () {
    console.log('服务器正在运行中...,访问地址是为：http://'+server.address().address+':'+server.address().port);
})