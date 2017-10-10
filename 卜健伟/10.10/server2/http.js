var http=require("http");
var fs=require("fs");
var path=require("path");
var mime={
    '.html':"text/html",
    '.css':"text/css",
    '.js':"text/javascript"
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
        console.log(mime[path.extname(req.url)]);
        res.setHeader("Content-Type",mime[path.extname(req.url)]);
        fs.readFile('.'+req.url,function(err,data){
            res.write(data);
            res.end();
        })
    }
})
server.listen(8000,'127.0.0.1',function () {
    console.log('服务器运行中...地址是http://'+server.address().address+':'+server.address().port);
});