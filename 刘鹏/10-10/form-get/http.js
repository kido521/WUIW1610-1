var http=require('http');
var fs=require('fs');
var url=require('url');
var qs=require('querystring');
var data=[
    '张三','李四','王五'
]
http.createServer(function (req,res) {
    var u= url.parse(req.url);
    if(req.url==="/favicon.ico"){
        res.end();
        return;
    }
    if(req.url=="/"||req.url=='/index.html'){
        res.writeHead(200,{'Content-type':'text/html'});
        fs.readFile('./index.html',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=="/search"){
        var q=qs.parse(u.query);
        res.setHeader("Content-type","text/plain;charset=utf-8");
        var result=data.filter(function (v,i) {
            if(v==q.s){
                return true;
            }
            return false;
        })
        res.end(result.toString())
    }
}).listen(8080)