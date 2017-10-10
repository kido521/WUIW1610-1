var http =require('http');
var fs =require('fs')

var server = http.createServer(function (req,res) {
    if(req.url=='/favicon.ico'){
        res.end()
        return;
    }
    if(req.url=='/'){
        res.setHeader("Content-type","text/html;")
        fs.readFile('./index.html',function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(req.url=='/index.css'){
        res.setHeader("Content-type","text/css;")
        fs.readFile('./index.css',function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(req.url=='/index.js'){
        res.writeHead(200,{"Content-type":"text/javascript;"})
        fs.readFile('./index.js',function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    else{
        res.writeHeader(404);
        res.end();
    }

})






server.listen(8000,'localhost',function () {
    console.log('服务器正在运行，地址是：http//:'+server.address().address+':'+server.address().port)

})