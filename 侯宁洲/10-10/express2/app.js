var express = require("express");
var app = express();

// app.get("/",function(req,res){
//     res.send('首页')
// })
// app.get("/list",function(req,res){
//     res.send("列表")
// })
// app.get("/category",function(req,res){
//     res.send("栏目")
// })

// app.get("/",function(req,res){
//     res.send("get 访问首页")
// })
//
// app.post("/",function(req,res){
//     res.send("post 访问首页")
// })
//
// app.put("/",function(req,res){
//     res.send("put 访问首页")
// })
//
// app.delete("/",function(req,res){
//     res.send("delete 访问首页")
// })

app.all('/',function(req,res){
    res.send("All 方法")
})



var server = app.listen(3000,'localhost',function(){
    console.log("当前项目地址是：http://%s:%s",server.address().address,server.address().port);
});
