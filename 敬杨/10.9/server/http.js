var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    console.log(req.url);
    if(req.url=="/favicon.ico"){
        res.end();
        return;
    }
    if(req.url=="/"||req.url=="/index.html"){
        res.setHeader("Content-type","text/html;charset=utf-8");//html
        fs.readFile('./index.html',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }
    if(req.url=="/index.css"){
        res.setHeader("Content-type","text/css;charset=utf-8");//html
        fs.readFile('./index.css',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }
    if(req.url=="/index.js"){
        res.setHeader("Content-type","text/javascript;charset=utf-8");//html
        fs.readFile('./index.js',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }

    req.writeHeader(404);
    res.end();

})
server.listen(8000,'127.0.0.1',function(){
    console.log("http://"+server.address().address+":"+server.address().port);
})