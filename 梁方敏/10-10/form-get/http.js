var http=require("http");
var fs=require('fs');
var url=require('url');
var qs=require("querystring")
var data=['张三','张三','张三','李四','王五'];

var server=http.createServer(function (req,res) {
    var u=url.parse(req.url);
    console.log(req.url)
    if(req.url=='/favicon.ico'){
        res.end();
    }
    if(req.url=='/'||req.url=='/index.html') {
        res.setHeader('content-type', 'text/html');
        fs.readFile('./index.html', function (err, data) {
            console.log(data)
            res.write(data);
            res.end();
        })
    }
    if(u.pathname=="/search"){
        var q=qs.parse(u.query);
        console.log(q);
        res.setHeader('content-type', 'text/plain;charset=utf-8');
        var result=data.filter(function (v,i) {
            if(v==q.s){
                return true;
            }
            return false;
        })
        res.end(result.toString());
    }
});
server.listen(8007);