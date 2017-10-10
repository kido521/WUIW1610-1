var http = require("http");
var server = http.createServer(function(req,res){
    res.setHeader("Content-type","text/plain;charset=utf-8");
    res.write('hello');
    setTimeout(function(){
        res.write('hi');
        res.end();
    },2000)
})
server.listen(8000,'127.0.0.1',function(){
    console.log("http://"+server.address().address+":"+server.address().port);
})