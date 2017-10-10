// var http =require("http");
// var fs=require("fs");
// var server =http.createServer(function (req,res) {
//     if(req.url==="/favicon.ico"){
//         res.end();
//         return
//     }
//     if(req.url=="/"||req.url=="/index.html"){
//         res.setHeader("Content-Type","text/html")
//         fs.readFile("./index.html",function(err,data){
//             res.write(data);
//             res.end()
//         })
//         return;
//     }if(req.url=="/index.css"){
//         res.setHeader('Content-Type','text/css');
//         fs.readFile("./index.css",function (err,data) {
//             res.write(data);
//             res.end()
//
//         })
//         return;
//     }
//     if(req.url=="/index.js"){
//         res.setHeader("Content-Type","text/javascript")
//         fs.readFile('./index.js',function (err,data) {
//             res.write(data);
//             res.end();
//         })
//         return
//     }
//     res.writeHead(404);
//     res.end()
//
// })
// server.listen(8000)


//升级版
// var http =require("http");
// var fs=require("fs");
// var path=require("path");
// var wenjian={
//     '.html':"text/html",
//     ".css":"text/css",
//     ".js":"text/javascript",
//     ".png":"image/png"
// }
// var server =http.createServer(function (req,res) {
//
//     if(req.url=="/favicon.ico"){
//         res.end();
//     }
//     if(req.url=='/'){
//         req.url='/index.html';
//     }
//     if(fs.existsSync('.'+req.url)) {
//         res.setHeader('Content-Type',wenjian[path.extname(req.url)]||'application/octet-stream');
//         fs.readFile('.'+req.url,function (err, data) {
//             res.write(data);
//             res.end()
//         })
//     }else{
//         res.writeHeader(404);
//         res.end();
//     }
//
// });
// server.listen(8000);

// 精华版  引入第三方的包

var http =require("http");
var fs=require("fs");
var path=require("path");
var mime=require("mime")
var server =http.createServer(function (req,res) {
    if(req.url=="/favicon.ico"){
        res.end();
    }
    if(req.url=='/'){
        req.url='/index.html';
    }
    if(fs.existsSync('.'+req.url)) {
        res.setHeader('Content-Type',mime.getType(req.url));
        fs.readFile('.'+req.url,function (err, data) {
            res.write(data);
            res.end()
        })
    }else{
        res.writeHeader(404);
        res.end();
    }

});
server.listen(8000);