var http=require('http');
var fs=require('fs');
var url=require('url');
var qs=require('querystring');
var user=[];
var server=http.createServer(function(req,res) {
    var u=url.parse(req.url);
    if (u.pathname == 'favicon.ico') {
        res.end();
        return;
    }
    if(u.pathname=='/'||u.pathname=='/index.html'){
        fs.readFile('./index.html',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=='/login'){
        var data='';
        req.on('data',function(d){
            data+=d;
        });
        req.on('end',function(){

            user.push(qs.parse(data));
            res.end('插入成功');

        });
        console.log(user);
    }
});
    server.listen(8000);