var http = require("http")
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var data = ['zhangsan','lisi','wangmazi'];
http.createServer(function (req,res) {
    var u = url.parse(req.url);
    if(u.pathname =="/favicon.ico"){
        res.end();
        return;
    }
    if(u.pathname == "/"){
        fs.readFile('./index.html',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=='/search'){
        var q = qs.parse(u.query);
        var result = data.filter(function (v,i) {
            if(v == q.s){
                return true;
            }
            return false;
        })
        res.end(result.toString());
    }
}).listen(9000);