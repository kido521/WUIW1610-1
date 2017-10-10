const http=require('http');
const fs=require('fs');
const url=require('url');
const qs=require('querystring');

var arr=['aa','bb','cc'];

http.createServer(function(req,res){
    var u=url.parse(req.url);//将req.url转换成对象

    //u.pathnam  ==>  /index.html

    if(u.pathnam=='/favicon.ico'){
        res.end();
        return;
    }

    if ((u.pathname=='/') || (u.pathname=='/index.html')){
        res.setHeader('Content-type','text/html;charset=utf-8');
        fs.readFile('./index.html',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }

    if(u.pathname=='/search'){
        var reslute=arr.filter(function(v,i){
            //u.query  将req.url中“?”后的内容取出来
            //qs.parse(u.query) 将取出的内容分成对象
            var nn= qs.parse(u.query);
            if(nn.s==v){
                return true;
            }
            return false;
        });
        res.end(reslute.toString());
    }
}).listen(8008)