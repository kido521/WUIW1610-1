var fs = require("fs");
fs.rename("./test1.txt",'./hello.txt',err=>{
    if(err) throw err;
})