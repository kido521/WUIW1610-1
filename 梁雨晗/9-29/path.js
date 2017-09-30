const path = require('path');

// sep
// console.log(path.sep);  //'\'

// normalize 初始化(规范路径)
var p='e:/代码阶段';
console.log(path.normalize(p));  // e:\代码阶段

// join 连接路径
var p1=__dirname;  //当前路径
console.log(path.join(p1,'../fs'));   //E:\代码阶段\NodeJs\fs

// resolve 解析路径为绝对路径
console.log(path.resolve(__dirname,'../path'));

//path.isAbsolute 判断是否为一个绝对路径
console.log(path.isAbsolute(p1));  //true

var p=__filename;
// basename  返回路径中代表文件的路径
console.log(path.basename(p));

// dirname(path)  返回路径中代表文件夹的路径
console.log(path.dirname('e:/代码阶段/NodeJs/mod3.js'));
// e:/代码阶段/NodeJs

// 获取文件后缀名
console.log(path.extname(p));

// 获取路径对象
console.log(path.parse(p))
    // { root: 'E:\\',
    //     dir: 'E:\\代码阶段\\NodeJs\\path',
    //     base: 'path.js',
    //     ext: '.js',
    //     name: 'path' }

// format  从对象中返回路径字符串
p1=path.parse(p)
console.log(path.format(p1))
    // E:\代码阶段\NodeJs\path\path.js

