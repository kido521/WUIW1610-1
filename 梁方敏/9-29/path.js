var path = require("path");
// console.log(path.sep);  //获取路径分隔符

// var p="d:/desktop/wuiw1610-1/"
// console.log(path.normalize(p)); //将路径规范化

// var p=__dirname;
// console.log(path.join(p,"../fs模块/readdir.js"));   //链接路径

// console.log(path.resolve("./path.js"))  //将路径转化为绝对路径

// var p="../fs.js"
// var p2=path.resolve(p);
// console.log(path.isAbsolute(p));
// console.log(path.isAbsolute(p2));  //判断路径是否为绝对路径

// var p1=__dirname;
// var p2="../fs.js";
// console.log(path.relative(p1,"F:/wed.study/1.write/Nodejs/path模块/path.js"));  //将后面的路径转化为相对于p1的相对路径

var pf=__filename;  //获取当前文件路径
// console.log(pf);
// console.log(path.dirname(pf));   //获取获取文件的目录
// console.log(path.basename(pf));  //只获取获取文件的名称
// console.log(path.extname(pf));   //只获取获取文件的后缀名
// console.log(path.parse(pf));    //返回路径的对象

// var po=path.parse(pf);
// po.name="123";
// po.base="123"+po.ext; // 结合base 和 name  修改文件名字
// console.log(po);
// console.log(path.format(po));   //将路径的对象转化为路径