/**
 * Created by Administrator on 2017/10/10 0010.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var data = [
    'aa','bb','cc','dd','aa','bb','dd'
];
http.createServer(function(req,res){
    var u = url.parse(req.url);
    if(u.pathname=="/favicon.ico"){
      res.end();
        return;
    };
    if(u.pathname=="/"||u.pathname=="/index.html"){
        res.setHeader("Content-type","text/html;charset=utf-8")
        fs.readFile('./index.html',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    };
    if(u.pathname=="/search"){
        var q = qs.parse(u.query);
        var result = data.filter(function(v,i){
            if(v == q.s){
                return true;
            }
            return false;
        })
        res.write(JSON.stringify(result));
        res.end();

    };
}).listen(8080)