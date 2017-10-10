var http = require('http');
var fs = require('fs');
var url=require('url');
var qs=require('querystring');
var data=['张三','李四'];
var sever=http.createServer((req,res)=>{
    if(req.url==='/favicon.ico'){
        res.end();
        return;
    }
    var u=url.parse(req.url);
    if(req.url==='/'||req.url==='/index.html'){
        fs.readFile('./index.html',function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=='/search'){
        var q=qs.parse(u.query);
        console.log(q);
        res.setHeader("Content-type","text/plain;charset=utf-8");
        data.filter((v,i)=>{
            if(v==q.s){
                return true;
            }
            return false;
        })
        res.end(q.s);
    }

}).listen(8000);