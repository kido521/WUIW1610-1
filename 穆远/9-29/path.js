var path = require("path");
// console.log(path);
var p = __dirname;
var q = __filename;//当前文件的绝对路径
// console.log(q);
// console.log(p);
var s = "/text/next/bbsd/abc/text.txt";
var p2 = "path.js";
// console.log(path.normalize(s));//格式化路径,当前系统.
// console.log(path.sep);//获取当前系统的反斜杠
// console.log(path.resolve(p2));//转换为绝对路径
// console.log(path.extname(p2));//获取文件的后缀名
// console.log(path.relative(p,p2));//将路径转换为相对于p的相对路径
// console.log(path.isAbsolute(q));//判断是否为一个绝对路径
// console.log(path.dirname(q));//返回列表中文件夹的部分;
// console.log(path.basename(p));//返回路径中的文件名
// console.log(path.parse(q));返回json对象，一大堆信息
console.log(path.format(path.parse(q)));//根据json对象返回路径;
//abcd