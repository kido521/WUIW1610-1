var express=require("express");
var app=express();
var fs=require("fs");

// 任何一个路径都可以执行中间件(不加/list路径)
// 1.挂载路径
// 2.不挂在路径
app.use("/list",function (req,res,next) {
        var t=new Date().toLocaleDateString();
        fs.appendFile("./log.txt",t+"\n",function (err) {
            if(err) throw  err;

        });
    console.log("1111");
    next()


})
app.get("/",function (req,res) {
    res.send("首页")

})
app.get("/list",function (req,res) {
    res.send("list")

})
app.listen(3000)
