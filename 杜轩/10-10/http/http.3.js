var http=require("http");

var server =http.createServer(function(req,res){
    res.setHeader("Content-type","text/html;charset=utf-8")
   res.write("你好");
   setTimeout(function(){
       res.write("<div style='width:300px; height: 300px;'></div>");
       res.end();
   },2000)

})

server.listen(8000,'localhost',function(){
    console.log("http://"+server.address().address+":"+server.address().port);
});