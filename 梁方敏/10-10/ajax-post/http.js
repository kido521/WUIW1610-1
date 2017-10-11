var http=require("http");
var fs=require('fs');
var url=require('url');
var qs=require("querystring")
var users=[];
var server=http.createServer(function (req,res) {
    var u=url.parse(req.url);
    // console.log(req.url)
    if(u.pathname=='/favicon.ico'){
        res.end();
        return;
    }
    if(u.pathname=='/'||req.url=='/index.html') {
        res.setHeader('content-type', 'text/html');
        fs.readFile('./index.html', function (err, data) {
            // console.log(data)
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=="/login"){
        var data="";
        req.on('data',function (d) {
            data+=d;
        })
        req.on('end',function () {
            users.push(qs.parse(data));
            res.end("注册成功");
            console.log(users);
        })
    }
});
server.listen(8009);