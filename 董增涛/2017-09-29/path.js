const path = require("path");

//自动获取路径分隔符
// console.log(path.sep);

//自动修正路径
// var p = "c:/desktop/main/../";
//上面写法在windows上错误 输出正确
// console.log(path.normalize(p));

//连接路径
// var p1 = __dirname;
// console.log(path.join(p1,'../git.md'));

//将相对路径转换为绝对路径
// var p1 = __dirname;
// console.log(path.resolve(p1,"../main/"));

//判断是否为绝对路径
//返回boolean
// var p1 = __dirname;
// console.log(path.isAbsolute(p1));

//相对路径

//获取路径中的文件名
// var p1 = "./local/index/new/pic.img";
// console.log(path.basename(p1));

//格式化路径
//输出为对象
// { root: '',
//     dir: './local/index/new',
//     base: 'pic.img',
//     ext: '.img',
//     name: 'pic' }
// var p1 = "./local/index/new/pic.img";
// console.log(path.parse(p1));

//将对象转换为路径
// var p1 = { root: '',
//     dir: './local/index/new',
//     base: 'pic.img',
//     ext: '.img',
//     name: 'pic' };
// console.log(path.format(p1));