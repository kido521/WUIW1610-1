var http=require("http");
var fs=require("fs");
var path=require("path");
var mime={
    '.html':"text/html",
    '.css':"text/css",
    '.js':"text/javascript",
    '.png':'image/png',
    '.jpg':'image/jpeg'
}
var server =http.createServer(function(req,res){
    if(req.url==='/favicon'){
        res.end();
        return;
    }
    if(req.url=='/'){
        req.url='/index.html';
    }
    if(fs.existsSync('.'+req.url)){
        // console.log(req.url)
        // console.log(path.extname(req.url));
        // console.log(mime[path.extname(req.url)]);
        res.setHeader("Content-Type",mime[path.extname(req.url)]);
        fs.readFile('.'+req.url,function(err,data){
            res.write(data);
            res.end();
        })
    }
})
server.listen(1000);