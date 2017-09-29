var path=require("path");
console.log(path.sep)  //  \
// 1.初始化路径
var p="d:/desktop/aa/../";
console.log(path.normalize(p)); //规范路径，把错的路径变对  初始化路径

//2.path.join()连接路径
var p=__dirname;
console.log(path.join(p,'../lan/bb.txt'))//F:\nodeJS\global\lan\bb.txt

//3.path.resolve()将其解析为绝对路径 //参数没限制，但最多只能写两
console.log(path.resolve(__dirname,"../lan/bb.txt")) //F:\nodeJS\global\lan\bb.txt

//4.判断是否为绝对路径
var p='../lan/bb.txt';
console.log(path.isAbsolute(p));//   false

//5.判断是否为相对路径  (用处不大)
var p=__dirname;
var p1="../lan/bb.txt";
console.log(path.relative(p,"../lan/bb.txt"));

// 6.path.dirname
var p=__filename;
console.log(path.dirname(p));  //F:\nodeJS\global\path

//7.获取文件名
var p=__filename;
console.log(path.basename(p))//path.js

// 8.path.extname()拿到文件后缀名
var f=__filename;
console.log(path.extname(f))  //.js

//9.path.parse()
var f=__filename;
// console.log(path.parse(f))
//{ root: 'F:\\',dir: 'F:\\nodeJS\\global\\path',base: 'path.js',ext: '.js',name: 'path' }
var po=path.parse(f);
po.name='123';
po.base="123"+po.ext;
console.log(path.format(po));
console.log(path.parse(f))