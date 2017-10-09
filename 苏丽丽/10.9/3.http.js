var http=require('http');
var server=http.createServer(function(req,res){
    res.setHeader("Content-type","text/html;charset=utf-8");
    res.write("<h1>hello</h1>");
    res.end();
})
server.listen(8000,'localhost',function(){
    console.log('http://'+server.address().address+ ":"+server.address().port)
})