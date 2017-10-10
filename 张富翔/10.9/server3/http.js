var http=require("http");
var fs=require("fs");
var path=require("path");
var mime=require("mime");
var server =http.createServer(function(req,res) {
    if(req.url==="/favicon.ico"){
        res.end();
    }
    if(req.url=="/"){
        req.url="/index.html"
    }
    if(fs.existsSync('.'+req.url)){
        res.setHeader("Content-type",mime.getType(req.url));
        fs.readFile('.'+req.url,function(err,data){
            res.write(data);
            res.end();
        })
    }else{
        res.writeHeader(404);
        res.end();
    }
})

server.listen(8000,'127.0.0.1',function () {
    console.log('服务器运行中...地址是http://'+server.address().address+':'+server.address().port);
});
