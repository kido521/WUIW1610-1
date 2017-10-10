var http = require("http");

var server = http.createServer(function(req,res){
    var date = new Date();
    res.write(date.toLocaleTimeString());
    res.end();
})
server.listen(8000,'localhost',function(){
    console.log("http://"+server.address().address+":"+server.address().port)
})