var http=require("http");
var fs=require("fs");
var url=require("url");
var qs=require("querystring");
var data=[
    '啦啦','嘻嘻','哈哈','呼呼','呵呵'
]
var server=http.createServer(function(req,res){
    var u=url.parse(req.url);
    if(u.pathname=='/favicon.ico'){
        res.end();
        return;
    }
    if(u.pathname=='/'||u.pathname=='/index.html'){
        fs.readFile('./index.html',function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=='/search'){
        var q=qs.parse(u.query);
        console.log(q);
        res.setHeader("Content-Type","text/plain;charset=utf-8");
        var result=data.filter(function (v,i) {
            if(v==q.s){
                return true;
            }
            return false;
        });
        res.write(JSON.stringify(result));
        res.end();
    }
});
server.listen(8000,'127.0.0.1',function () {
    console.log('服务器运行中...地址是http://'+server.address().address+':'+server.address().port);
});