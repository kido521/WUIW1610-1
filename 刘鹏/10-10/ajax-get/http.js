var http=require('http');
var fs=require('fs');
var url=require('url');
var qs=require('querystring');
var data =[
    '张三','李四','王五','赵六'
]
    var server = http.createServer(function (req,res) {
    var uObj = url.parse(req.url);
    if(uObj.pathname=="/favicon.ico"){
        res.end();
        return;
    }
    if(uObj.pathname=="/" || uObj.pathname=="/index.html"){
        fs.readFile("./index.html",function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(uObj.pathname=="/search"){
        var qObj = qs.parse(uObj.query);
        res.setHeader('Content-type','text/plain;charset=utf-8');
        var d=data.filter(function (v) {
            if(v==qObj.s){
                return true;
            }
            return false;
        })
         res.write(JSON.stringify(d));
            res.end();
        }
    })
server.listen(8020);