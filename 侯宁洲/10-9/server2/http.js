var http = require("http");
var fs = require("fs");
var path = require('path');
var mime = {
    '.html':'text/html',
    '.css':'text/css',
    '.js':"text/javascript",
    '.png':"image/png",
    ".jpg":"image/jpeg"
}
var server = http.createServer(function(req,res){
    if(req.url==="/favicon.ico"){
        res.end();
        return;
    }

    if(fs.existsSync('.'+req.url)){
        console.log(path.extname(req.url))
        console.log(mime[path.extname(req.url)])
        res.setHeader("Content-type",mime[path.extname(req.url)]||"application/octet-stream")
        fs.readFile('.'+req.url,function(err,data){
            res.write(data);
            res.end();
        })
    }else{
        res.writeHeader(404);
        res.end();
    }





})
server.listen(8000)