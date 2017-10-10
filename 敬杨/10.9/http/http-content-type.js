var http = require("http");
var server = http.createServer(function(req,res){
    res.setHeader("Content-type","text/plain;charset=utf-8");//html
    res.write('<h2>kkkk</h2>');
    res.end();
})
server.listen(8000,'127.0.0.1',function(){
    console.log("http://"+server.address().address+":"+server.address().port);
})