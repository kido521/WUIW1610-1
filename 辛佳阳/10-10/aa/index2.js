var http = require("http");
var fs = require("fs");
var url = require("url")
var path = require("path")
var qs = require("querystring");
var data = ['张张','李丽','王网','赵找']
var server = http.createServer(function(req,res){
    var uObj =url.parse(req.url)

    if(req.url === "/favicon.ico"){
        res.end();
        return;
    }
    if(uObj.pathname == "/" || uObj.pathname == "index2.html"){
        res.setHeader("Content-type","text/html")
        fs.readFile("./index.html",function(err,data){
            res.write(data.toString());
            res.end()
        })
        return;
    }
    if(uObj.pathname == "/search"){
        var q = qs.parse(uObj.query)
        res.setHeader("Content-type","text/plain;charset=utf-8");
        var result = data.filter(function(v,i){
            if(v == q.s){
            return true;
        }
        return false;
    })
        res.write(JSON.stringify(result))
        res.end();
    }
}).listen(8000);





