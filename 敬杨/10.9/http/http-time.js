var http = require("http");
var server = http.createServer(function(req,res){
    var date = new Date();
    res.write(date.toString());
    res.end();
})
server.listen(8000,'127.0.0.1',function(){
    console.log("http://"+server.address().address+":"+server.address().port);
})




