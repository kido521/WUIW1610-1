const  http = require('http');
var server = http.createServer(function (req,res) {
    res.writeHead(200,{'Content-type':'text/plan'});
    res.write("<h1>hello</h1>");
    res.end();
})
server.listen(3000);