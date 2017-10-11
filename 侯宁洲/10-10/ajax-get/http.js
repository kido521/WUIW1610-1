var http = require("http");
var url = require("url");
var fs = require("fs");
var qs = require("querystring");
var data = [
    '张三','张三','李四','王武','赵柳'
];
var server = http.createServer((req,res)=>{
    var uObj = url.parse(req.url);
    if(uObj.pathname=="/favicon.ico"){
        res.end();
        return;
    }
    if(uObj.pathname=="/"||uObj.pathname=="/index.html"){
        fs.readFile("./index.html",function (err,data) {
           res.write(data);
           res.end();
        })
    }
    if(uObj.pathname=="/search"){
        var qObj =qs.parse(uObj.query);
        var d = data.filter((v)=>{
            if(v==qObj.s){
                return true;
            }
            return false;
        })
        res.write(JSON.stringify(d));
        res.end();
    }
});
server.listen(8080)