# http
## 什么是HTTP?
Web服务器：能够提供http服务就是一台服务器。基于http协议。



表单 get  post
ajax get  post

get  本质 得

post 本质 给


## Nodejs中http模块
WAMP  Windows  Apache       Mysql Php
               提供http服务

安装了提供Web服务的软件
Apache
nginx
IIS  
....



### 示例
1. 创建第一个http服务器
2. 给前台发送一个时间
3. http中的content-type
4. 静态http服务器
5. ajax-get
6. ajax-post
7. ajax-upload



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
path = "/index.js";
ct = "text/javascript";
if(req.url==path){
    res.setHeader("Content-type",ct)
    fs.readFile('.'+path,function (err,data) {
      res.write(data);
      res.end();
    })
    return;
}


index.html  ==> text/html
index.js ==> text/javascript
index.css ==> text/css
