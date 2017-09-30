// var path=require("path");
// var p=__dirname;
// console.log(path.join(p,"../node_modules"));
// join用来连接路径的E:\node.js\node_modules


// var path=require("path");
// path.resolve(__dirname,resolve('../node_modules/boom'));
//resolve变为绝对路径


// var path=require("path");
// var p1='../node_modules';
// var p2=__filename;
// console.log(path.relative(p2,p1));


// var path=require("path");
// var p=__filename;
// var s=p.lastIndexOf(path.sep);
// console.log(p.slice(s+1));
//获得路径中的文件名
// 简单方法：path.basename;


// 文件的后缀名
// var path=require("path");
// var f=__filename;
// console.log(path.extname(f));


//返回路径字符串的对象
// var path=require("path");
// var f=__filename;
// console.log(path.parse(f));


//改变文件名
// var path=require("path");
// var f=__filename;
// var po=path.parse(f);
// po.name='123';
// po.base='123'+po.ext;
// console.log(po);
// console.log(path.format(po));



