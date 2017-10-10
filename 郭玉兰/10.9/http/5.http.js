var http=require('http');
var server=http.createServer(function(req,res){ //1.先创建
    res.writeHead(200,{'Content-Type':'text/html'});
    // res.setHeader("Content-type","text/plain;charset=utf-8") //
    res.write('<h1>安静</h1>');
    res.end();
})
server.listen(8000);