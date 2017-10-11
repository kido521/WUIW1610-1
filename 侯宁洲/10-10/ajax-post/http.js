var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
var users = [];
var server = http.createServer((req,res)=>{
    var u = url.parse(req.url);
    if(u.pathname == "/favicon.ico"){
        res.end();
        return;
    }
    if(u.pathname=="/"||u.pathname=="/index.html"){
        fs.readFile("./index.html",(err,data)=>{
            res.write(data);
            res.end();
        })
        return ;
    }

    if(u.pathname=="/login"){
        var data = "";
        req.on('data',function(d){
            data+=d;
        })
        req.on('end',function(){
            users.push(qs.parse(data));
            res.end('插入成功')
            console.log(users)
        })

    }
});

server.listen(8080);