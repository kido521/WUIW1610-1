var  http = require('http');
var server=http.createServer(function (req,res) {
    // res.writeHeader(200,"Content-type","text/html")
    res.setHeader("content-type","text/html;charset=utf-8")
    res.write("<h1>hello!</h1>")
    res.end();
})
server.listen(8000);