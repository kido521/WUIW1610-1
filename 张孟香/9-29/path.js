var path=require('path');
//console.log(path.sep);
//
//
var p='E:/node/path/aa.js';
//console.log(path.normalize(p))

//console.log(path.resolve('./path.js'))
//
//console.log(path.join('D:/js','aa.js'))

//console.log(path.isAbsolute(p))
//console.log(path.isAbsolute('./aa.js'))

//console.log(path.relative(__dirname,'aa.js'))
//console.log(path.dirname(p));
//console.log(path.basename(p));
//console.log(path.extname(p))

console.log(path.parse(__filename));

var xiu=path.parse(__filename);
xiu.base='path1'+xiu.ext;
console.log(xiu);

console.log(path.format(xiu));