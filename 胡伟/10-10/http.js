const http = require('http');
const fs = require('fs');
const url = require('url');
var qs = require('querystring');
var data =[
    '清明','张三','李四','王五','赵六','清明','时节'
]
http.createServer(function(req,res){
    var u = url.parse(req.url);
    if(req.url=="/favicon.ico"){
        res.end();
        return;
    }
    if(u.pathname=="/" || u.pathname=="/index.html"){
        fs.readFile("./index.html",function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=="/search"){
        var q = qs.parse(u.query);//拿到查询字符串
        res.setHeader('Content-type','text/plain;charset=utf-8');
        var result = data.filter(function (v,i) {
            if(v==q.s){
                return true;
            }
            return false;
        });
        res.end(result.toString());  //发送一次数据时，可以使用res.end()
    }
}).listen(9090);