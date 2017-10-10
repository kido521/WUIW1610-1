const fs = require("fs");
fs.writeFile("demo1.txt","hello world!",{flag:"a"},err=>{
    if(err) throw err;
})

// fs.writeFile("demo1.txt","abc",err=>{
//     if(err) throw err;
// })