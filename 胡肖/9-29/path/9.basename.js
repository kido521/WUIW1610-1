var path=require('path');
var f=__filename;
console.log(f)
console.log(path.basename(f))
console.log(path.extname(f))
console.log(path.parse(f))
var po=path.parse(f);
po.base='123.js';
console.log(path.format(po))