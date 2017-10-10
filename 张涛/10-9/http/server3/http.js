var http=require("http");
var fs=require('fs');
var path=require('path');
var mime=require('./node_modules/mime');
// console.log(mime);
var server=http.createServer(function (req,res) {
    // console.log(req.url)  //查看请求的路径
    if(req.url=='/favicon.ico'){
        res.end();
    }
    if(req.url=='/'){
        req.url='/index.html'
    }
    if(fs.existsSync('.'+req.url)){
        console.log(path.extname(req.url));
        console.log(mime.getType(req.url));
        res.setHeader('content-type',mime.getType(req.url));
        fs.readFile('.'+req.url,function(err,data) {
            res.write(data);
            res.end();
        })
    }else{
        res.writeHeader(404);
        res.end();
    }
});
server.listen(88,"127.0.0.1",function () {
    console.log("服务器已开启...如需访问请点击："+"http://"+server.address().address+":"+server.address().port)
});