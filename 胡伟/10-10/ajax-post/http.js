const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');
var users=[];
var server = http.createServer(function (req,res) {
    var u= url.parse(req.url);
    if(u.pathname=="/favicon.ico"){
        res.end();
        return;
    }
    if(u.pathname=="/" || u.pathname=="/login.html"){
        fs.readFile("./login.html",function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=="/login"){
        var data ="";
        req.on('data',function (d) {
            data+=d;
            console.log(d.toString());
        })
        req.on('end',function () {
            users.push(qs.parse(data));
            // console.log(qs.parse(data));
            res.end('登录成功');
            console.log(users);
        })
    }
})
server.listen(8080);