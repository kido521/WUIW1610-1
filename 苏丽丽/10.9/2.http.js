var http=require('http');
var server=http.createServer(function(req,res){ //1.先创建
    // var date = new Date();
    // res.write(date.toLocaleDateString());
    // res.end();//告诉客户端，响应已完成

    // 2  同步完成后--异步  所有把end 放在setTimeout
    res.setHeader("Content-type","text/plain;charset=utf-8");
    res.write('你好');//同步
    setTimeout(function(){
        res.write('我很好'); //异步
        res.end();//响应已完成
    })

})

   server.listen(8000,'localhost',function(){
    console.log('http://'+server.address().address+ ":"+server.address().port)
})

