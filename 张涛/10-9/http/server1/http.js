var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {




    if(req.url=="/favicon.ico"){

        res.end();
        return;
    }
    if(req.url=="/index.css"){
        res.setHeader("Content-type","text/css;charset=utf-8")//设置编码
        fs.readFile('./index.css',function (err,date) {
            res.write(date);
            res.end();
        })
        return;
    }
    if(req.url=="/"||req.url=="./index.html"){
        res.setHeader("Content-type","text/html;charset=utf-8")//设置编码
        fs.readFile('./index.html',function (err,date) {
            res.write(date);
            res.end();
        });
        return;
    }

    if(req.url=="/index.js"){
        res.setHeader("Content-type","text/JavaScript")//设置编码
        fs.readFile('./index.js',function (err,date) {
            res.write(date);
            res.end();
        });
        return;
    }






})

server.listen(88,"127.0.0.1",function () {
    console.log("服务器已开启...如需访问请点击："+"http://"+server.address().address+":"+server.address().port)
});