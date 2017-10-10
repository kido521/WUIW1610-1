var http=require("http");


var server=http.createServer(function (req,res){
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);
})


server.listen(8000,'localhost',function(){
    console.log("http://"+server.address().address+":"+server.address().port);
});