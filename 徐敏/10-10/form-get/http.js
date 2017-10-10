/**
 * Created by Administrator on 2017/10/10 0010.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var data = [
    'aa','bb','cc','dd'
];
http.createServer(function(req,res){
    var u = url.parse(req.url);
    if(req.url=="/favicon.ico"){
      res.end();
        return;
    };
    if(req.url=="/"||req.url=="/index.html"){
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
        res.end(result.toString());
    };
}).listen(8080)