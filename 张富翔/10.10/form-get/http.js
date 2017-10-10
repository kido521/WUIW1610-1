
var http=require("http");
var fs=require("fs");
var url=require("url");
var qs=require("querystring");
var data=[
    "张三","lisi","王五","12","45","猫","狗","lisi","王五","12","45","猫","狗","lisi","王五","12","45","猫","狗","lisi","王五","12","45","猫","狗"
];
var server=http.createServer(function (req,res){
    var u=url.parse(req.url);
    if(req.url==="/favicon.ico"){
        res.end();
        return;
    }
    if(u.pathname=='/'||u.pathname=='/index.html'){
        fs.readFile('./index.html',function(err,data){
            res.write(data);
            res.end();
        })
    }
    if(u.pathname=='/search'){
        var q=qs.parse(u.query);
        res.setHeader("Content-type","text/plain;charset=utf-8");
        var result = data.filter(function(v,i){
            if(v==q.s){
                return true;
            }
            return false;
        });
        res.end(result.toString())
    }

})

server.listen(8000,'localhost',function(){
    console.log("http://"+server.address().address+":"+server.address().port);
});