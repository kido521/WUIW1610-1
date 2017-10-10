var http=require("http");

var server =http.createServer(function(req,res){
    var date =new Date();
    res.write(date.toLocaleString(date));
    res.end();
})

server.listen(8000,'localhost',function(){
    console.log("http://"+server.address().address+":"+server.address().port);
});
