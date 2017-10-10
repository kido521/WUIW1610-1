var http =require("http");
var fs =require("fs");
var path=require("path");
var mime=require("mime"); //升级版
// var wenjian={
//     '.html':'text/html',
//     '.css':'text/css',
//     '.js':'text/js',
//     '.jpg':'text/jpg'
// } //文件类型太多  所有引用包含所有文件类型的包mime
var server=http.createServer(function (req,res) {
    if(req.url==="/favicon.ico"){
        res.end();
        return;
    }
    if(req.url=='/'){
        req.url='/index.html';
    }
    if(fs.existsSync("."+req.url)){
        // res.setHeader('Content-Type',wenjian[path.extname(req.url)]||'application/octet-stream');
        res.setHeader('Content-Type',mime.getType(req.url));  //升级版
        // 读取html文件
        fs.readFile('.'+req.url,function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    res.writeHeader(404);
    res.end();
})
server.listen(8000)