const http = require('http');
const fs = require('fs');
var server = http.createServer(function(req,res){
     if(req.url==="/favicon.ico"){
          res.end();
          return;
     }
     if(req.url=="/" || req.url=="/index.html"){
         res.setHeader("Content-type","text/html;charset=utf-8");
         fs.readFile('./index.html',function (err,data) {
             res.write(data);
             res.end();
         })
         return;
     }
     if(req.url=="/index.css"){
        res.setHeader("Content-type","text/css");
        fs.readFile('./index.css',function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(req.url=="/index.js"){
        res.setHeader("Content-type","text/javascript");
        fs.readFile('./index.js',function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
     res.writeHeader(404);
     res.end();
})
server.listen(8000,'localhost',function(){
    console.log('服务器正在运行中...，访问地址为：http://'+server.address().address+':'+server.address().port);
});