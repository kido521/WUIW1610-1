var fs = require("fs");

// console.log(fs.existsSync('./abc.txt'))
// var path = "./c.txt";
// if(fs.existsSync(path)){
//     fs.rename(path,'./bbb.txt',err=>{
//         if(err) throw err;
//     })
// }else{
//     console.log('文件不存在')
// }

// try{
//     fs.renameSync("./qq.txt",'./tengxun.txt');
// }catch(err){
//     throw err;
// }


fs.rename("./abc","./text",err=>{
    if(err) throw err;
})