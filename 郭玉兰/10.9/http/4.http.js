var http=require('http');
var server=http.createServer(function(req,res){ //1.先创建
    res.setHeader("Content-type","text/plain;charset=utf-8") //设置响应头
    res.write('你好！');
    setTimeout(function(){
        res.write("我的朋友");
        res.end();
    },2000);
    // console.log(res)
})
server.listen(8000,'localhost',function() {
    console.log('http://' + server.address().address +":" + server.address().port)
})
