var fs = require("fs");
// if(!fs.existsSync('images')){
//     fs.mkdirSync("images");
// }
//给某个文件夹下创建子文件夹
// if(!fs.existsSync("images/porduct")){
//     fs.mkdirSync("images/porduct")
// }


// js/lib/aa/bb/cc/ss/dsf
// 1. 拆分数组
//     [js,lib,aa,bb,cc,ss,dsf]
// 2. 遍历数组 依次创建文件夹
//    js
//    js/lib
//    js/lib/aa
//    js/lib/aa/bb
//        ....
// fs.mkdirSync("js/lib");

mkdirs("js/lib/aa/bb/cc/ss/dsf")
function mkdirs(path){
   var ps = path.split('/');
   // var pArr = []
    var str = "";
   for(let i=0;i<ps.length;i++){
       // pArr.push(ps[i]);
       str+=ps[i]+'/';
       if(!fs.existsSync(str)){
           fs.mkdirSync(str);
       }
   }
}


