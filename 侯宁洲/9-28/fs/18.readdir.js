var fs = require("fs");
fs.readdir("images",(err,files)=>{
    console.log(files)
    for(let i=0;i<files.length;i++){
        var stats = fs.statSync('images/'+files[i]);
        if(stats.isDirectory()){
            console.log(files[i],'是一个文件夹')
        }else{
            console.log(files[i],'是一个文件')
        }

    }
    // fs.stat("images/"+files[1],(err,stats)=>{
    //     console.log(stats)
    // })
    // var stats = fs.statSync("images/"+files[0])
    // console.log(stats.isFile())

})