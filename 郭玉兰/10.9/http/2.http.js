var http=require('index');
var server=http.createServer(function(req,res){ //1.先创建
    res.write('你好！');
    res.end();
    console.log(res)
})
server.listen(8000,'localhost',function() {
    console.log('http://' + server.address().address +":" + server.address().port)

})
