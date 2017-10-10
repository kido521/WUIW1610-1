var fs = require("fs");

//第一种
// var datas = [];
// fs.readFile("./a.txt",function(err,data){
//     if(err) throw err;
//     datas.push(data)
// })
// fs.readFile('./b.txt',function(err,data){
//     if(err) throw err;
//     datas.push(data)
// })
//
// console.log(datas)

// fs.readFile("./a.txt",function(err,data1){
//     if(err) throw err;
//     fs.readFile("./b.txt",function(err,data2){
//         if(err) throw err;
//         console.log(Buffer.concat([data1,data2]).toString())
//     })
// })

//第二种
// var buf1 = fs.readFileSync("./a.txt");
// var buf2 = fs.readFileSync('./b.txt');
// console.log(Buffer.concat([buf1,buf2]).toString())

// var buf1 = fs.readFileSync("./a.txt",'utf8');
// var buf2 = fs.readFileSync('./b.txt','utf8');
// console.log(buf1+buf2);

//第三种
//如何遍历对象？
var counts = [];
function output(data,num,callback){
    counts.push(data)
    if(counts.length==num){
        callback&&callback(Buffer.concat(counts))
    }
}
function kkk(data){
    console.log(data.toString())
}
function qqq(data){
    fs.writeFile("./c.txt",data)
}
fs.readFile('./a.txt',(err,data)=>{
    if(err) throw err;
    output(data,2,qqq)
})
fs.readFile('./b.txt',(err,data)=>{
    if(err) throw err;
    output(data,2,qqq)
})

