var http=require('http');
var fs=require('fs');
var path = require("path");
var mime = require("mime");
var server=http.createServer(function(req,res){ //1.先创建
    if(req.url=="/favicon.ico"){  //判断，
        res.end();
        return;
    }
    if(req.url=="/"){
        req.url="/index.html";
    }
    if(req.url){
        // console.log(mime[path.extname(req.url)]);
        fs.readFile("."+req.url,function(err,data){
            res.setHeader("Content-type",mime.getType(req.url)+";charset=utf-8");
            res.write(data);
            res.end();
        })
    }else{
        res.writeHead(404);
        res.end();
    }
})
server.listen(8000);