const path = require("path");
// console.log(path);
// 1.path.sep               获取文件的分隔符
// console.log(path.sep);
// 2.path.normalize(path)   初始化
// var p = "d:/desktop/node.js";
// console.log(path.normalize(p));
// 3.path.join();           用于连接两个路径
// var p = __dirname;
// console.log(path.join(p,'../9-28fs'));
// 4.path.resolve()         将其解析为绝对路径
// console.log(p,__dirname);
// 5.path.isAbsolute(path)  判断是否是绝对路径
// console.log(path.isAbsolute(__dirname));    //true
// 6.path.relative();       用于将路径转换成相对路径
// 7.path.dirname(path)     返回路径中代表文件夹的部分
// console.log(path.dirname(__dirname));   //C:\Users\charlene\Desktop\nodejs
// 8.path.basename(path,ext)获取文件名
// console.log(path.basename("9-29path/path模块.js"));   //path模块.js
// 9.path.extname(path)     文件的后缀名
// console.log(path.extname("hh.png"));    //.png
// 10.path.parse(path)      返回路径字符串对象
// var f=__filename;
// console.log(path.parse(f));
// // { root: 'F:\\',dir: 'F:\\nodeJS\\global\\path',base: 'path.js',ext: '.js',name: 'path' }
// 11.path.format(pathObject)
// var po=path.parse(f);
// po.name ='123';
// po.base="123"+po.ext;
// console.log(path.format(po));
// console.log(path.parse(f))
