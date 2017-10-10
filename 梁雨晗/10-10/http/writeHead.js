var http =require("http");
var server=http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type':'text/plain'});  //<h1>diamone</h1>
    res.writeHead(200,{'Content-Type':'text/html'});  //diamone
    res.write("<h1>diamone</h1>");
    res.end();
})
server.listen(8000)