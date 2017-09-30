var path = require('path');
var p = __filename;

console.log(p);
// 返回路径中的最后一部分。  取文件名和后缀名
console.log(path.basename(p));