var path=require("path");
// console.log(path);
// console.log(path.sep)  //  \

// 1.初始化路径  将错的路径显示为对的
// var p="g:/desktop/2.txt/../";
// console.log(path.normalize(p));

//2.path.join()连接路径
// var p=__dirname;
// console.log(path.join(p,'../js/lib'))//G:\node笔记\js\lib

//3.path.resolve()将其解析为绝对路径,参数没限制，但最多只能写两个
// console.log(path.resolve(__dirname,"../text/2.1.txt")) //G:\node笔记\text\2.1.txt

//4.判断是否为绝对路径
// var p='../text/2.1.txt';
// console.log(path.isAbsolute(p));//   false

//5.判断是否为相对路径
// var p=__dirname;
// var p1="../text/2.1.txt";
// console.log(path.relative(p,"../text/2.1.txt"));

// 6.path.dirname//返回文件路径
// var p=__filename;
// console.log(path.dirname(p));//G:\node笔记\9.29

//7.获取文件名
// var p=__filename;
// console.log(path.basename(p))//1path.js

// 8.path.extname()拿到文件后缀名
// var f=__filename;
// console.log(path.extname(f))  //.js

//9.path.parse()//返回路径字符串对象
var f=__filename;
// console.log(path.parse(f))
var po=path.parse(f);
po.name ='123';
po.base="123"+po.ext;
console.log(path.format(po));
console.log(path.parse(f))