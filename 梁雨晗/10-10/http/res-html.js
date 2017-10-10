var http =require("http");
var fs =require("fs");
var server=http.createServer(function (req,res) {
    if(req.url==="/favicon.ico"){
        res.end();
        return;
    }
    if(req.url=="/"||req.url=="/index.html"){
        res.setHeader('Content-Type','text/html');
        // 读取html文件
        fs.readFile('./index.html',function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(req.url=="/index.css"){
        res.setHeader('Content-Type','text/css');
        // 读取css文件
        fs.readFile('./index.css',function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(req.url=="/index.js"){
        // 读取js文件
        res.setHeader('Content-Type','text/javascript');
        fs.readFile('./index.js',function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    res.writeHeader(404);
    res.end();
})
server.listen(8000)