# http
## ʲô��HTTP?
Web���������ܹ��ṩhttp�������һ̨������������httpЭ�顣



�� get  post
ajax get  post

get  ���� ��

post ���� ��


## Nodejs��httpģ��
WAMP  Windows  Apache       Mysql Php
               �ṩhttp����

��װ���ṩWeb��������
Apache
nginx
IIS  
....



### ʾ��
1. ������һ��http������
2. ��ǰ̨����һ��ʱ��
3. http�е�content-type
4. ��̬http������
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
