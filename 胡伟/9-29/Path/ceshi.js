const path = require('path');
// 属性
// console.log(path.sep);
// 方法
// var p = "d:\/aaa\/bbb";
// console.log(path.normalize(p));

// var p = __dirname;
// console.log(path.join(p,'../util.js'));

// var p = path.resolve(__dirname,'../ceshi.js');
// console.log(p);

// var p1 = "../ceshi.js";
// var p2 = __filename;
// console.log(path.isAbsolute(p2));

// var p1 = __dirname;
// var p2 = '../ceshi.js';
// console.log(path.relative(p1,'../util.js'));

// var p = __filename;
// console.log(path.dirname('p'));

var p =__filename;
// var s = p.lastIndexOf(path.sep);
// console.log(p.slice(s+1));

console.log(path.basename(p));
console.log(path.extname(p));

console.log(path.parse(p));

var po = path.parse(p);
po.base = "1234" + po.ext;
console.log(path.format(po));



