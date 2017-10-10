var http = require("http");

var server = http.createServer(function(req,res){
    res.write("Hello!");
    res.write("hi!");
    res.end();
    console.log(res);
})
server.listen(8000,'localhost',function(){
    console.log("http://"+server.address().address+":"+server.address().port)
})