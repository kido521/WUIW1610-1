const http=require('http');
const fs=require('fs');
const url=require('url');
const qs=require('querystring');

var arr=['aa','bb','cc','bb','bb'];

http.createServer(function(req,res){
    var u=url.parse(req.url);//将req.url

    if(u.pathnam==='/favicon.ico'){
        res.end();
        return;
    }

    if ((u.pathname=='/') || (u.pathname=='/ajax_get.html')){
        res.setHeader('Content-type','text/html;charset=utf-8');
        fs.readFile('./ajax_get.html',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }

    if(u.pathname=='/search'){
        var reslute=arr.filter(function(v,i){
            var nn= qs.parse(u.query);
            if(nn.s==v){
                return true;
            }
            return false;
        });
        res.end(JSON.stringify(reslute));
    }
}).listen(8008)