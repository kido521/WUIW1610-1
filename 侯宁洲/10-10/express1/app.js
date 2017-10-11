var express = require("express");
var app = express();

//当 浏览器发起get请求，并且请求地址 / 时候 触发 这个操作
app.get("/",function(req,res){
    res.send("hello world!");
})

var server = app.listen(3000,'localhost',function(){
    console.log("当前项目地址是：http://%s:%s",server.address().address,server.address().port);
});
