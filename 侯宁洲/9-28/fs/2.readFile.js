const fs = require("fs");
//readFile 默认读取到数据格式为Buffer
/*
 * 1. Buffer.toString()
 * 2. readFile(path,'utf8',callback)
 * */


// fs.readFile('./test2.txt',function(err,data){
//     if(err) throw err;
//     // console.log(data)
//     console.log(data.toString())
// })

// fs.readFile("../fs.md",(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString())
// })

// fs.readFile("../fs.md","utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

fs.readFile("../fs.md",{encoding:"utf8"},(err,data)=>{
    if(err) throw err;
    console.log(data)
})