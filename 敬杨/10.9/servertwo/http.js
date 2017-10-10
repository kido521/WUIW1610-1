var http = require("http");
var fs = require("fs");
var path = require("path");
var mime ={
    ".html":"text/html",
    ".css": "text/css",
    ".js" :"text/javascript"
}
var server = http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        res.end();
        return;
    }
    if(req.url=="/"){
        req.url="/index.html"
    }
    if(fs.existsSync('.'+req.url)){
        res.setHeader("Content-type",mime[path.extname(req.url)]);//html
        fs.readFile('.'+req.url,function(err,data){
            res.write(data);
            res.end();
        })
    }else{
        req.writeHeader(404);
        res.end();
    }
})

server.listen(8000,'127.0.0.1',function(){
    console.log("http://"+server.address().address+":"+server.address().port);
})