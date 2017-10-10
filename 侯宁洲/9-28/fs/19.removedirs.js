var fs = require("fs");
//删除一个文件夹以及内部所有文件
removeDir('images')
function removeDir(path){
    //读取文件夹
    var files= fs.readdirSync(path);
    //判断有没有内容
    if(files.length>0){
        //有
        for(let i=0;i<files.length;i++){
            var stats = fs.statSync(path+'/'+files[i]);
            if(stats.isFile()){
                //是文件 删除该文件
                fs.unlinkSync(path+'/'+files[i]);
            }else{
                removeDir(path+'/'+files[i])

            }
        }
    }
    fs.rmdirSync(path);
}