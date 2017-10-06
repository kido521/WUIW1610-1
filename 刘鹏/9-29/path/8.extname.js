var path = require('path');
var p = __filename;

console.log(p);

console.log(path.extname(p));// 返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。