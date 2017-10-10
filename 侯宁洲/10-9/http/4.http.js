var http = require("http");

var server = http.createServer(function(req,res){
    res.setHeader("Content-type","text/plain;charset=utf-8");
    res.write("你好！");
    res.write("你好！");
    setTimeout(function(){
        res.write("静态服务器")
        res.end();
    },2000)
})
server.listen(8000,'localhost',function(){
    console.log("http://"+server.address().address+":"+server.address().port)
})