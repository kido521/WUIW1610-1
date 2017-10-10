var http=require("http");
var fs=require("fs");
var url=require("url");
var qs=require("querystring");
var data=[
    '张三','lisi','王五','赵六'
]
http.createServer(function(req,res){
    var u=url.parse(req.url);
    if(req.url=='/favicon.ico'){
        res.end();
        return;
    }
    console.log(u);
    if(u.pathname=='/'||u.pathname=='/index1.html'){
        fs.readFile('./index1.html',function (err,data) {
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
        res.end(result.toString());
    }
}).listen(8000)
