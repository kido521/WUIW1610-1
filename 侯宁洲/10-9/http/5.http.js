var http = require("http");
var server = http.createServer(function (req,res) {
    // res.writeHead(200,{'Content-Type':'text/plain'});
    res.setHeader("Content-type","text/html")
    res.write("<h1>hello!</h1>");
    res.end();
})
server.listen(8000)