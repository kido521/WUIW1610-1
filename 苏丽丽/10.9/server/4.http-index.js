var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){ //1.先创建
    // console.log(req.url);
    if(req.url==="/favicon.ico"){  //判断，
        res.end();
        return;
    }
    if(req.url=="/"||req.url=="/index.html"){
        res.setHeader("Content-type","text/html")
        fs.readFile('./index.html',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }
    if(req.url=="/index.css"){
        res.setHeader("Content-type","text/css")
        fs.readFile('./index.css',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }
    if(req.url=="/index.js"){
        res.setHeader("Content-type","text/javascript")
        fs.readFile('./index.js',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }
    res.writeHeader(404);
    res.end();
})
server.listen(8000,'localhost',function(){
    console.log('http://'+server.address().address+ ":"+server.address().port)
})
