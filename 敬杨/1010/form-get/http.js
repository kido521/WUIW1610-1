var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
var data = ['jy','yjm','spt','hnz'];
var server = http.createServer(function(req,res){
    var u = url.parse(req.url);
    console.log(u);
    if(req.url == "/favicon,ico"){
        res.end();
        return;
    }
    if(req.url=="/"||req.url=="/index.html") {
        res.setHeader("Content-type", "text/html;charset=utf-8");//html
        fs.readFile('./index.html', function (err, data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname == "/search"){
        var q = qs.parse(u.query);
        console.log(u.query);
        // res.setHeader("Content-type", "text/html;charset=utf-8");
        var reslut = data.filter(function (v,i) {
            if(v == q.s){
                return true;
            }
            return false;
        });
        res.end(reslut.toString());
    }
})
server.listen(8000,'127.0.0.1',function(){
    console.log("http://"+server.address().address+":"+server.address().port);
})