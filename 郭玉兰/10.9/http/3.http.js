var http=require('http');
var server=http.createServer(function(req,res){ //1.先创建
    var date = new Date();
    res.write("hey");
    res.end();//告诉客户端，响应已完成
    console.log(date);
})
server.listen(8000,'localhost',function(){
    console.log('http://'+server.address().address+ ":"+server.address().port)
})