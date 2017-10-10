const http=require('http');
const fs=require('fs');
const url=require('url');
const qs=require('querystring');
var deng='';
var shujuku=[{'user':'aa','pass':'aaa'},{'user':'qq','pass':'qqq'}];



http.createServer(function(req,res){
    var u=url.parse(req.url);//将req.url

    if(u.pathnam=='/favicon.ico'){
        res.end();
        return;
    }

    if ((u.pathname=='/') || (u.pathname=='/ajax_post.html')){
        res.setHeader('Content-type','text/html;charset=utf-8');
        fs.readFile('./ajax_post.html',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }

    if(u.pathname=='/login'){
        req.on("data",function(data){
            deng='';
            deng+=data;
        });
        req.on("end",function(){
            shujuku.forEach(function(v){
                var a=qs.parse(deng);
                if(a['user']==v['user']){
                    res.end(JSON.stringify(qs.parse(deng)))
                }
                res.end();
            });
        })
    }
}).listen(8008)