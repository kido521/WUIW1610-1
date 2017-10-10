var fs = require("fs");
copy("组件化开发.png",'2.png');

function copy(target,dest){
    fs.readFile(target,(err,data)=>{
        if(err) throw err;
        fs.writeFile(dest,data,err=>{
            if(err) throw err;
        })
    })
}