var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var ser = http.createServer(function(req,res){
    var u = url.parse(req.url);
    if(u.pathname == '/favicon.ico'){
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
    if(u.pathname=='/login'){
        var data = "";
        req.on('data',function(v){
            data+=v;
        })
        console.log(data);
        req.on('end',function(){
           res.end(data)
        })
    }
})
ser.listen(9000);