var express=require("express");
var app=express();
/**
 * 中央  10000
 * 省    6000    -4000
 * 市    4000    -2000
 * 县    2000    -2000
 * 乡里   1000   -1000
 * 村里    500   -500
 */
app.use(function (req,res,next) {
    //中央
    req.money=10000;
    console.log("中央")
    next();

})
app.use(function (req,res,next) {
    //省
    req.money=req.money-4000;
    console.log("省")
    // next();

})
app.use(function (req,res,next) {
    //市
    req.money=req.money-2000;
    console.log("市")

    next();

})
app.use(function (req,res,next) {
    //县
    req.money=req.money-2000;
    next();

})
app.use(function (req,res,next) {
    //乡
    req.money=req.money-1000;
    next();

})
app.use(function (req,res,next) {
    //村
    req.money=req.money-500;
    next();

})
app.get("/",function (req,res) {
    res.send(req.money+"")

})
app.listen(3000)