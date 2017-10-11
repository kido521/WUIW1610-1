/**
 * Created by Administrator on 2017/10/10 0010.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var users= [];
var srever = http.createServer(function(req,res){
    var u = url.parse(req.url);
    if(u.pathname=="/favicon.ico"){
      res.end();return;
    }
    if(u.pathname=="/"||u.pathname=="/index.html"){
        res.setHeader("Content-type","text/html;charset=utf-8")
        fs.readFile('./index.html',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=="/login"){
        var data = '';
        req.on('data', function (d) {
           data += d;
        })
        req.on('end', function () {
           users.push(qs.parse(data))
            res.end('ok');
            console.log(users)
        })
    };
})
srever.listen(8080)