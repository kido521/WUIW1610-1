var http=require("http");
var fs=require("fs");
var url=require("url");
var qs=require("querystring");
var users=[];
var server=http.createServer(function (req,res){
    var u=url.parse(req.url);
    if(u.pathname==="/favicon.ico"){
        res.end();
        return;
    }
    if(u.pathname=='/'||u.pathname=='/index.html'){
        fs.readFile('./index.html',function(err,data){
            res.write(data);
            res.end();
        })
    }
    if(u.pathname=='/login'){
        var data = "";
       req.on('data',function(d){
            data+=d;
       })
        req.on("end",function(){
            users.push(qs.parse(data));
            res.end("结束");
            console.log(users);
        })
    }

})

server.listen(8000,'localhost',function(){
    console.log("http://"+server.address().address+":"+server.address().port);
});