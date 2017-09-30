var path = require('path');
var p = __filename;

// 返回路径字符串的对象。
console.log(path.parse(p))

// { root: 'C:\\',
//     dir: 'C:\\Users\\lenovo\\Desktop\\test\\node\\path',
//     base: 'parse.js',
//     ext: '.js',
//     name: 'parse' }