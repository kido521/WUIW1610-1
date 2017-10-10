var http=require("http");
var fs=require('fs');
var server=http.createServer(function (req,res) {

    console.log(req.url)  //查看请求的路径
    if(req.url=='/favicon.ico'){
        res.end();
    }
    if(req.url=='/'||req.url=='/index.html'){
        res.setHeader('content-type','text/html');
        fs.readFile('./index.html',function (err,data) {
            res.write(data);
            res.end();
        })
    }
    if(req.url=='/index.css'){
        fs.readFile('./index.css',function (err,data) {
            res.write(data);
            res.end();
        })
    }
    if(req.url=='/index.js'){
        res.setHeader('content-type','text/javascript');
        fs.readFile('./index.js',function (err,data) {
            res.write(data);
            res.end();
        })
    }
});
server.listen(8004);