var http=require('http');
var fs=require('fs');
var url=require('url');
var qs=require('querystring');
var users =[];
var server = http.createServer(function (req,res) {
    var u = url.parse(req.url);
    if(u.pathname=="/favicon.ico"){
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
    if(u.pathname=="/index"){
        var data="";
        req.on("data",function(d){
            data+=d;
            console.log(d.toString());
        })
        req.on("end",function(){
            users.push(qs.parse(data));
            res.end('登陆成功');
            console.log(users);
        })
    }
})
server.listen(8010);