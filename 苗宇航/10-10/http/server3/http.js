const http=require("http");
const fs=require("fs");
const path=require("path");
const mime=require('mime');

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
        res.setHeader("Content-Type",mime.getType(req.url));
        fs.readFile('.'+req.url,function(err,data){
            res.write(data);
            res.end();
        })
    }
})
server.listen(8000,'localhost',function(){
    console.log('服务器正在运行中...，访问地址为：http://'+server.address().address+':'+server.address().port);
});